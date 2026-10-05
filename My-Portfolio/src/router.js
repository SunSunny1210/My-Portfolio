import { createRouter, createWebHistory } from 'vue-router'
import IntroductionView from './components/views/IntroductionView.vue'
import AboutMeView from './components/views/AboutMeView.vue'
import EducationView from './components/views/EducationView.vue'
import HabilitiesView from './components/views/HabilitiesView.vue'
import ContactView from './components/views/ContactView.vue'
import MyProjectView from './components/views/MyProjectView.vue'
import ProjectIntroduction from './components/views/child views/ProjectIntroduction.vue'
import ProjectObjective from './components/views/child views/ProjectObjective.vue'

export const projectRoutes = [
  { name: "Project Introduction", path: "", component: ProjectIntroduction },
  { name: "Project Objective", path: "objective", component: ProjectObjective },
]

export const routes = [
  { name: "Introduction", path: '/introduction', component: IntroductionView },
  { name: "About Me", path: '/about-me', component: AboutMeView },
  { name: "Education", path: '/education', component: EducationView },
  { name: "Habilities", path: '/habilities', component: HabilitiesView },
  { name: "My Project", path: '/my-project', component: MyProjectView, children: projectRoutes },
  { name: "Contact", path: '/contact', component: ContactView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})