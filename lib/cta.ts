import type { Session } from 'next-auth';
export function getCtaDestination(session: Session | null, preferredRole?: 'tradie'|'homeowner'): string {
 if (!session) return preferredRole === 'tradie' ? '/signup?role=tradie' : '/signup';
 if ((session.user as any).isAdmin) return '/admin';
 const hasHome = Boolean((session.user as any).hasHomeownerProfile);
 const hasTradie = Boolean((session.user as any).hasTradieProfile);
 if (hasHome && hasTradie) return '/role-select';
 if (hasHome) return '/homeowner/dashboard';
 if (hasTradie) return '/tradie/dashboard';
 return '/role-select';
}
