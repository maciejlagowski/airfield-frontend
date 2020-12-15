import {Injectable} from '@angular/core';
import {Overlay, OverlayRef} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {LoaderComponent} from '../components/loader/loader.component';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private readonly overlayRef: OverlayRef;

  constructor(private overlay: Overlay) {
    this.overlayRef = overlay.create();
  }

  public show(): void {
    const loaderOverlayPortal = new ComponentPortal(LoaderComponent);
    if (!this.overlayRef.hasAttached()) {
      this.overlayRef.attach(loaderOverlayPortal);
    }
  }

  public hide(): void {
    if (this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }
  }
}
