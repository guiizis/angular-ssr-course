import { isPlatformServer } from "@angular/common";
import { Directive, ElementRef, Inject, PLATFORM_ID } from "@angular/core";

@Directive({
  selector: '[appShellRender]'
})
export class AppShellRenderDirective {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private el: ElementRef) {
    if (isPlatformServer(this.platformId)) {

    }
  }
}
