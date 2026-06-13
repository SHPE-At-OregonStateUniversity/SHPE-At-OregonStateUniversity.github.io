// Cloudinary delivery URL helpers (spec 001, LD-9).
//
// The cloud name is public (it appears in every delivery URL) and is safe to
// commit. Uploads happen manually via the Cloudinary dashboard; public IDs
// carry no file extension.
//
// TODO(H1): replace the placeholder with the real cloud name once the org
// account exists. AC-6 cannot pass until then.
export const CLOUDINARY_CLOUD_NAME: string = '<CLOUD_NAME>';

// True once a real cloud name has been set. While false, CloudinaryImage
// renders PLACEHOLDER_IMAGE instead of a dead delivery URL, so the site never
// shows broken-image icons before photos are uploaded. Flips automatically when
// CLOUDINARY_CLOUD_NAME is replaced — no other code changes needed.
export const CLOUDINARY_CONFIGURED: boolean = CLOUDINARY_CLOUD_NAME !== '<CLOUD_NAME>';

// Neutral inline placeholder: a framed-photo glyph on the cream card colour.
// Inline data-URI so it needs no network request and never 404s. Colours mirror
// --color-card and --color-text-tertiary from app.css.
export const PLACEHOLDER_IMAGE =
	"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect width='400' height='400' fill='%23f5f0e6'/%3E%3Cg fill='none' stroke='%237a5c4e' stroke-width='8' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='112' y='132' width='176' height='136' rx='10'/%3E%3Ccircle cx='162' cy='178' r='15'/%3E%3Cpath d='M132 252l52-52 34 34 28-22 42 38'/%3E%3C/g%3E%3C/svg%3E";

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
