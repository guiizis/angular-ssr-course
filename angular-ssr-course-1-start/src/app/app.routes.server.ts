import { RenderMode, ServerRoute, PrerenderFallback } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'courses/:id',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Server,

    async getPrerenderParams() {
      return [{ id: '01' }];
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
