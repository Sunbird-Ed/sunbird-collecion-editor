import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonFormElementsModule, DialcodeCursor } from 'common-form-elements-web-v9';
import { SuiModule } from 'ng2-semantic-ui-v9';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HttpClientModule } from '@angular/common/http';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
import { InterpolatePipe } from './pipes/interpolate.pipe';
import { CollectionEditorLibraryComponent } from './collection-editor-library.component';
import { ContentplayerPageComponent } from './components/contentplayer-page/contentplayer-page.component';
import { EditorComponent } from './components/editor/editor.component';
import { HeaderComponent } from './components/header/header.component';
import { FancyTreeComponent } from './components/fancy-tree/fancy-tree.component';
import { MetaFormComponent } from './components/meta-form/meta-form.component';
import { LibraryComponent } from './components/library/library.component';
import { LibraryFilterComponent } from './components/library-filter/library-filter.component';
import { LibraryListComponent } from './components/library-list/library-list.component';
import { LibraryPlayerComponent } from './components/library-player/library-player.component';
import { ResourceReorderComponent } from './components/resource-reorder/resource-reorder.component';
import { SkeletonLoaderComponent } from './components/skeleton-loader/skeleton-loader.component';
import { QumlplayerPageComponent } from './components/qumlplayer-page/qumlplayer-page.component';
import { QumlLibraryModule } from '@project-sunbird/sunbird-quml-player';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import { TelemetryInteractDirective } from './directives/telemetry-interact/telemetry-interact.directive';
import { DateFormatPipe } from './directives/date-format/date-format.pipe';
import { AssetBrowserComponent } from './components/asset-browser/asset-browser.component';
import { CollectionIconComponent } from './components/collection-icon/collection-icon.component';
import { QumlPlayerComponent } from './components/quml-player/quml-player.component';
import { DialcodeComponent } from './components/dialcode/dialcode.component';
import { DialcodeService } from './services/dialcode/dialcode.service';
import { CsvUploadComponent } from './components/csv-upload/csv-upload.component';
import { ManageCollaboratorComponent } from './components/manage-collaborator/manage-collaborator.component';
import { PublishChecklistComponent } from './components/publish-checklist/publish-checklist.component';
import { RelationalMetadataComponent } from './components/relational-metadata/relational-metadata.component';
import { ResourceLibraryModule } from '@project-sunbird/sunbird-resource-library';
import { AppLoaderComponent } from './components/app-loader/app-loader.component';
import { AssignPageNumberComponent } from './components/assign-page-number/assign-page-number.component';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
  declarations: [
    CollectionEditorLibraryComponent,
    InterpolatePipe,
    SanitizeHtmlPipe,
    ContentplayerPageComponent,
    EditorComponent,
    QumlplayerPageComponent,
    HeaderComponent,
    FancyTreeComponent,
    MetaFormComponent,
    LibraryComponent,
    LibraryFilterComponent,
    LibraryListComponent,
    LibraryPlayerComponent,
    ResourceReorderComponent,
    SkeletonLoaderComponent,
    DateFormatPipe,
    TelemetryInteractDirective,
    AssetBrowserComponent,
    CollectionIconComponent,
    QumlPlayerComponent,
    DialcodeComponent,
    CsvUploadComponent,
    ManageCollaboratorComponent,
    PublishChecklistComponent,
    AppLoaderComponent,
    RelationalMetadataComponent,
    AssignPageNumberComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild([]), SuiModule,
  CommonFormElementsModule, InfiniteScrollModule, HttpClientModule,
  QumlLibraryModule, CarouselModule, ResourceLibraryModule, A11yModule],
  providers: [
    { provide: DialcodeCursor, useExisting: DialcodeService }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [EditorComponent],
})
export class CollectionEditorLibraryModule {}
