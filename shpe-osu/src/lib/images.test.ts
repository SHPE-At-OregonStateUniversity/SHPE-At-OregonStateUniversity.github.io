import { describe, expect, it } from 'vitest';
import { CLOUDINARY_CLOUD_NAME, cld } from './images';
import gallery from './data/gallery.json';

// AC-5 — cld() URL composition (LD-9 contract).
describe('cld', () => {
	it('appends a transform segment before the public id', () => {
		expect(cld('foo', 'w_400')).toBe(
			`https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_400/foo`
		);
	});

	it('omits the transform segment entirely when empty (no double slash)', () => {
		expect(cld('foo')).toBe(
			`https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/foo`
		);
		expect(cld('foo', '')).toBe(
			`https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/foo`
		);
	});
});

// AC-6 — network-gated: proves the Cloudinary account exists and at least one
// real asset is uploaded. Run with: RUN_NETWORK_TESTS=1 npm run test
describe.runIf(process.env.RUN_NETWORK_TESTS === '1')('cloudinary delivery (network)', () => {
	it('serves the first gallery asset', async () => {
		const first = gallery[0];
		expect(first, 'gallery.json must have at least one entry').toBeDefined();
		const res = await fetch(cld(first.publicId, 'f_auto,q_auto,w_400'));
		expect(res.status).toBe(200);
	});
});
