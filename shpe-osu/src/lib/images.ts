// Cloudinary delivery URL helpers (spec 001, LD-9).
//
// The cloud name is public (it appears in every delivery URL) and is safe to
// commit. Uploads happen manually via the Cloudinary dashboard; public IDs
// carry no file extension.
//
// TODO(H1): replace the placeholder with the real cloud name once the org
// account exists. AC-6 cannot pass until then.
export const CLOUDINARY_CLOUD_NAME = '<CLOUD_NAME>';

/**
 * Build a Cloudinary delivery URL. Pure URL builder — no implicit transforms;
 * callers compose transform strings (e.g. `f_auto,q_auto,w_800`) themselves.
 *
 *   cld('foo', 'w_400') → https://res.cloudinary.com/<cloud>/image/upload/w_400/foo
 *   cld('foo')          → https://res.cloudinary.com/<cloud>/image/upload/foo
 */
export function cld(publicId: string, transforms = ''): string {
	const segment = transforms ? `${transforms}/` : '';
	return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${segment}${publicId}`;
}
