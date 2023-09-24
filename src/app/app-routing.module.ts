import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { SignupStudentsComponent } from './components/signup-students/signup-students.component';
import { SignupTeachersComponent } from './components/signup-teachers/signup-teachers.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { SearchComponent } from './components/search/search.component';
import { EspaceTeachersComponent } from './components/espace-teachers/espace-teachers.component';
import { AjouterCoursComponent } from './components/ajouter-cours/ajouter-cours.component';
import { AjouterExamenComponent } from './components/ajouter-examen/ajouter-examen.component';
import { PublicationsGeneraleComponent } from './components/publications-generale/publications-generale.component';
import { ExamenTableComponent } from './components/examen-table/examen-table.component';
import { CoursTableComponent } from './components/cours-table/cours-table.component';
import { AdminComponent } from './components/admin/admin.component';
import { EspaceNotesComponent } from './components/espace-notes/espace-notes.component';
import { EspaceElevesComponent } from './components/espace-eleves/espace-eleves.component';
import { PublicationTableComponent } from './components/publication-table/publication-table.component';
import { NoteTableComponent } from './components/note-table/note-table.component';
import { PublicationsConfirmeComponent } from './components/publications-confirme/publications-confirme.component';
import { CoursConfirmerComponent } from './components/cours-confirmer/cours-confirmer.component';
import { ExamensConfirmerComponent } from './components/examens-confirmer/examens-confirmer.component';
import { NoteConfirmerComponent } from './components/note-confirmer/note-confirmer.component';
import { PublicationsElevesComponent } from './components/publications-eleves/publications-eleves.component';
import { PublicationsElevesTablesComponent } from './components/publications-eleves-tables/publications-eleves-tables.component';
import { PublicationsElevesConfirmeComponent } from './components/publications-eleves-confirme/publications-eleves-confirme.component';
import { SendReponseComponent } from './components/send-reponse/send-reponse.component';
import { ModifierPublicationsGeneraleComponent } from './components/modifier-publications-generale/modifier-publications-generale.component';
import { ModifierTeachersComponent } from './components/modifier-teachers/modifier-teachers.component';
import { ModiferStudentsComponent } from './components/modifer-students/modifer-students.component';
import { ModifierNoteComponent } from './components/modifier-note/modifier-note.component';
import { ModifierExamenComponent } from './components/modifier-examen/modifier-examen.component';
import { ModifierPublicationsElevesComponent } from './components/modifier-publications-eleves/modifier-publications-eleves.component';
import { BooksComponent } from './components/books/books.component';
import { CalculNoteComponent } from './components/calcul-note/calcul-note.component';
import { CalendrierComponent } from './components/calendrier/calendrier.component';
import { VoirReponseComponent } from './components/voir-reponse/voir-reponse.component';
import { RepondreTableComponent } from './components/repondre-table/repondre-table.component';
import { ReponseComponent } from './components/reponse/reponse.component';
import { ModifierAdminComponent } from './components/modifier-admin/modifier-admin.component';
import { ModifierCoursComponent } from './components/modifier-cours/modifier-cours.component';
import { WeatherComponent } from './components/weather/weather.component';


const routes: Routes = [
  //localhost 4200:://Home
  {path: "", component : HomeComponent},
  //localhost 4200:// signupAdmin
  {path: "signupAdmin" , component : SignupAdminComponent},
  //localhost 4200:// signupStudents
  {path: "signupStudents" , component : SignupStudentsComponent},
  //localhost 4200:// SignupTeachers
  {path: "signupTeachers" , component : SignupTeachersComponent},
  //localhost 4200:// login
  {path:"login" , component : LoginComponent},
  //localhost 4200:// contact
  {path:"contact", component : ContactComponent},
  //localhost 4200:// recherche
  {path:"search" , component : SearchComponent},
  //localhost 4200:// espace teachers
  {path:"espaceTeachers" , component : EspaceTeachersComponent},
  //localhost 4200:// ajouter cours
  {path:"ajouterCours" , component : AjouterCoursComponent},
  //localhost 4200:// ajouter examen
  {path:"ajouterExamen" , component : AjouterExamenComponent},
  //localhost 4200:// publications generale
  {path:"publicationsGenerales" , component : PublicationsGeneraleComponent},
  //localhost 4200:// examen table
  {path:"examenTable" , component : ExamenTableComponent},
  //localhost 4200:// cours table
  {path:"coursTable" , component : CoursTableComponent},
  //localhost 4200:// admin
  {path:"admin" , component : AdminComponent},
  //localhost 4200:// espace note
  {path:"espaceNote" , component : EspaceNotesComponent},
  //localhost 4200:// espace eleves
  {path:"espaceEleve" , component : EspaceElevesComponent},
  //localhost 4200:// publication table
  {path:"publicationTable", component : PublicationTableComponent},
  //localhost 4200:// note table
  {path:"noteTable", component : NoteTableComponent},
  //localhost 4200:// publications confirmer
  {path:"publicationsConfirmer" ,component : PublicationsConfirmeComponent},
  //localhost 4200:// cours confirmer
  {path:"coursConfirmer" , component : CoursConfirmerComponent},
  //localhost 4200:// examen confirmer
  {path:"examensConfirmer" , component : ExamensConfirmerComponent},
  //localhost 4200:// notes confirmer
  {path:"noteConfirmer" , component : NoteConfirmerComponent},
  //localhost 4200:// publications eleves
  {path:"publicationsEleves" , component : PublicationsElevesComponent},
  //localhost 4200:// publications tables eleves
  {path:"publicationsElevesTables" , component : PublicationsElevesTablesComponent},
  //localhost 4200:// publications eleves confirme
  {path:"publicationsElevesConfirme" , component : PublicationsElevesConfirmeComponent},
  //localhost 4200:// reponder aux reponse
  {path:"sendReponse" , component : SendReponseComponent},
  //localhost 4200:// modifier publications generales
  {path:"modifierPublications/:id" , component : ModifierPublicationsGeneraleComponent},
  //localhost 4200:// modifier teachers
  {path:"modifierTeachers/:id" , component : ModifierTeachersComponent},
  //localhost 4200:// modifier eleves
  {path:"modifierEleves/:id" , component : ModiferStudentsComponent},
  //localhost 4200:// modifier notes
  {path:"modifierNotes/:n" , component : ModifierNoteComponent},
  //localhost 4200:// modifier examens
  {path:"modifierExamens/:e" , component : ModifierExamenComponent},
  //localhost 4200:// modifier publications eleves
  {path:"modifierPubliEleves/:p" , component : ModifierPublicationsElevesComponent},
  //localhost 4200:// modifier admin
  {path:"modifierAdmin/:id" , component : ModifierAdminComponent},
  //localhost 4200:// modifier cours
  {path:"modifierCours/:c" , component : ModifierCoursComponent},
  //localhost 4200:// books
  {path:"books" , component : BooksComponent},
  //localhost 4200:// calculer note
  {path:"calculerNote" , component : CalculNoteComponent},
  // localhost 4200:// calendrier
  {path:"calendrierEleve" , component : CalendrierComponent},
  // localhost 4200:// voir reponse
  {path:"voirReponse" , component : VoirReponseComponent},
  //localhost 4200:// reponder
  {path:"reponderTable" , component : RepondreTableComponent },
  //localhost 4200:// reponse
  {path:"envoieReponse", component : ReponseComponent},
  //localhost 4200:// weather
  {path:"weather" , component : WeatherComponent},
   //localhost 4200:// teams sport
   {path:"apiTeams" , component : WeatherComponent},

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
