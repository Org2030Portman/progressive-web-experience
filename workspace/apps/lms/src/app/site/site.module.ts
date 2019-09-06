import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { LicenseComponent } from './license/license.component';
import { SharedModule } from '../modules/shared/shared.module';

@NgModule({
  declarations: [NavbarComponent, SidebarComponent, FooterComponent, LoginComponent, ContactUsComponent, AboutUsComponent, BlogComponent, LicenseComponent],
  exports: [NavbarComponent, SidebarComponent, FooterComponent],
  imports: [CommonModule, SharedModule],
})
export class SiteModule {}
