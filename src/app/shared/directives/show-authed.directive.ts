import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Directive({ selector: '[showAuthed]' })
export class ShowAuthedDirective implements OnInit {

  condition: boolean;

  constructor(
    private templateRef: TemplateRef<any>,
    private authService: AuthService,
    private viewContainer: ViewContainerRef,

  ) {}

  ngOnInit() {
    this.authService.isAuthenticated.subscribe(
      (isAuthenticated) => {
        if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      }
    )
  }

  @Input() set showAuthed(condition: boolean) {
    this.condition = condition;
  }

}
