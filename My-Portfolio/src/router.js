import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import IntroductionView from './components/views/IntroductionView.vue'
import AboutMeView from './components/views/AboutMeView.vue'
import EducationView from './components/views/EducationView.vue'
import HabilitiesView from './components/views/HabilitiesView.vue'
import ContactView from './components/views/ContactView.vue'


const routes = [
  { name: "Introduction", path: '/introduction', component: IntroductionView },
  { name: "About Me", path: '/about-me', component: AboutMeView },
  { name: "Education", path: '/education', component: EducationView },
  { name: "Habilities", path: '/habilities', component: HabilitiesView },
  { name: "Contact", path: '/contact', component: ContactView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})