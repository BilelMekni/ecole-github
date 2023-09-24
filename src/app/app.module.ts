import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { CountsComponent } from './components/counts/counts.component';
import { WhyComponent } from './components/why/why.component';
import { FeaturesComponent } from './components/features/features.component';
import { PopularComponent } from './components/popular/popular.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { DirectionsComponent } from './components/directions/directions.component';
import { SectionComponent } from './components/section/section.component';
import { CoursComponent } from './components/cours/cours.component';
import { ProfesseursComponent } from './components/professeurs/professeurs.component';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { SignupTeachersComponent } from './components/signup-teachers/signup-teachers.component';
import { SignupStudentsComponent } from './components/signup-students/signup-students.component';
import { LoginComponent } from './components/login/login.component';
import { BannerComponent } from './components/banner/banner.component';
import { ContactComponent } from './components/contact/contact.component';
import { SearchComponent } from './components/search/search.component';
import { ElevesComponent } from './components/eleves/eleves.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EspaceTeachersComponent } from './components/espace-teachers/espace-teachers.component';
import { AjouterCoursComponent } from './components/ajouter-cours/ajouter-cours.component';
import { AjouterExamenComponent } from './components/ajouter-examen/ajouter-examen.component';
import { PublicationsGeneraleComponent } from './components/publications-generale/publications-generale.component';
import { CoursPipe } from './pipes/cours.pipe';
import { ExamenTableComponent } from './components/examen-table/examen-table.component';
import { CoursTableComponent } from './components/cours-table/cours-table.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { AdminComponent } from './components/admin/admin.component';
import { AdminTableComponent } from './components/admin-table/admin-table.component';
import { TeachersTableComponent } from './components/teachers-table/teachers-table.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { PublicationTableComponent } from './components/publication-table/publication-table.component';
import { EspaceNotesComponent } from './components/espace-notes/espace-notes.component';
import { EspaceElevesComponent } from './components/espace-eleves/espace-eleves.component';
import { NoteTableComponent } from './components/note-table/note-table.component';
import { PublicationsConfirmeComponent } from './components/publications-confirme/publications-confirme.component';
import { CoursConfirmerComponent } from './components/cours-confirmer/cours-confirmer.component';
import { NoteConfirmerComponent } from './components/note-confirmer/note-confirmer.component';
import { ExamensConfirmerComponent } from './components/examens-confirmer/examens-confirmer.component';
import { PublicationsElevesComponent } from './components/publications-eleves/publications-eleves.component';
import { PublicationsElevesTablesComponent } from './components/publications-eleves-tables/publications-eleves-tables.component';
import { PublicationsElevesConfirmeComponent } from './components/publications-eleves-confirme/publications-eleves-confirme.component';
import { SendReponseComponent } from './components/send-reponse/send-reponse.component';
import { GenderPipe } from './pipes/gender.pipe';
import { ModifierPublicationsElevesComponent } from './components/modifier-publications-eleves/modifier-publications-eleves.component';
import { ModifierExamenComponent } from './components/modifier-examen/modifier-examen.component';
import { ModifierCoursComponent } from './components/modifier-cours/modifier-cours.component';
import { ModifierPublicationsGeneraleComponent } from './components/modifier-publications-generale/modifier-publications-generale.component';
import { ContactTableComponent } from './components/contact-table/contact-table.component';
import { ModifierTeachersComponent } from './components/modifier-teachers/modifier-teachers.component';
import { ModiferStudentsComponent } from './components/modifer-students/modifer-students.component';
import { ModifierNoteComponent } from './components/modifier-note/modifier-note.component';
import { BooksComponent } from './components/books/books.component';
import { CalculNoteComponent } from './components/calcul-note/calcul-note.component';
import { CalendrierComponent } from './components/calendrier/calendrier.component';
import { VoirReponseComponent } from './components/voir-reponse/voir-reponse.component';
import { RepondreTableComponent } from './components/repondre-table/repondre-table.component';
import { ReponseComponent } from './components/reponse/reponse.component';
import { ModifierAdminComponent } from './components/modifier-admin/modifier-admin.component';
import { WeatherComponent } from './components/weather/weather.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HeroComponent,
    AboutComponent,
    CountsComponent,
    WhyComponent,
    FeaturesComponent,
    PopularComponent,
    TrainersComponent,
    DirectionsComponent,
    SectionComponent,
    CoursComponent,
    ProfesseursComponent,
    SignupAdminComponent,
    SignupTeachersComponent,
    SignupStudentsComponent,
    LoginComponent,
    BannerComponent,
    ContactComponent,
    SearchComponent,
    ElevesComponent,
    EspaceTeachersComponent,
    AjouterCoursComponent,
    AjouterExamenComponent,
    PublicationsGeneraleComponent,
    CoursPipe,
    ExamenTableComponent,
    CoursTableComponent,
    AdminComponent,
    AdminTableComponent,
    TeachersTableComponent,
    StudentsTableComponent,
    PublicationTableComponent,
    EspaceNotesComponent,
    EspaceElevesComponent,
    NoteTableComponent,
    PublicationsConfirmeComponent,
    CoursConfirmerComponent,
    NoteConfirmerComponent,
    ExamensConfirmerComponent,
    PublicationsElevesComponent,
    PublicationsElevesTablesComponent,
    PublicationsElevesConfirmeComponent,
    SendReponseComponent,
    GenderPipe,
    ModifierPublicationsElevesComponent,
    ModifierExamenComponent,
    ModifierCoursComponent,
  
    ModifierPublicationsGeneraleComponent,
    ContactTableComponent,
    ModifierTeachersComponent,
    ModiferStudentsComponent,
    ModifierNoteComponent,
    BooksComponent,
    CalculNoteComponent,
    CalendrierComponent,
    VoirReponseComponent,
    RepondreTableComponent,
    ReponseComponent,
    ModifierAdminComponent,
    WeatherComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwPaginationModule,
    

    
  
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
