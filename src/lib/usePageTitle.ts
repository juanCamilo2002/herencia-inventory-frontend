'use client';

import { usePathname } from 'next/navigation';
import { APP_ROUTES } from './routes';

export function usePageTitle() {
  const pathname = usePathname();

  // match exacto o prefijo (para subrutas)
  const route = APP_ROUTES.find(
    (r) => pathname === r.href || pathname.startsWith(`${r.href}/`)
  );

  return route?.label ?? '';
}
