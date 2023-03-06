<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import VAppBar from "@gits-id/app-bar";
const checked = ref(false);
import { ref } from "vue";

const isOpen = ref(false);
const selected = ref([]);

// import VBreadcrumbs, { type VBreadcrumbItem } from "@gits-id/breadcrumbs";

const items = ref<VBreadcrumbItem[]>([
  {
    title: "Home",
    to: "/",
  },
  {
    title: "About",
    to: "/about",
  },
  {
    title: "All Pages",
    to: "/allpages",
  },
]);

const states = ["active", "inactive"];

const itemes = [...Array(30)].map((_, index) => ({
  index,
  name: `User-${index}`,
  email: `user-${index}@example.com`,
  age: index + 1 * 10,
  state: states[Math.floor(Math.random() * states.length)],
}));

const headeres = ref<VDataTableHeader[]>([
  {
    value: "index",
    text: "ID",
  },
  {
    value: "name",
    text: "Name",
  },
  {
    value: "email",
    text: "Email",
  },
]);

const items3 = ref([
  {
    text: "Item 1",
  },
  {
    text: "Item 2",
  },
  {
    divider: true,
  },
  {
    text: "Item 3",
  },
  {
    text: "Item 4",
  },
]);

const item4 = {
  text: "Text",
  to: "/",
  icon: "ri:home-2-line",
  children: [
    {
      text: "Home",
      to: "/",
    },
    {
      text: "About",
      to: "/about",
    },
  ],
};

const items5 = [
  {
    text: "Item",
    to: "/",
  },
  {
    text: "Item 2",
    to: "/",
  },
  {
    text: "Item 3",
    to: "/",
  },
];

const page = ref(1);
const totalItems = ref(100);
const itemsPerPage = ref(10);

const rating = ref(3);

const items6 = ref<VSelectItem[]>([
  {
    text: "Item 1",
    value: 1,
  },
  {
    text: "Item 2",
    value: 2,
  },
  {
    text: "Item 3",
    value: 3,
  },
]);
</script>

<template>
  <Navbar />
  <div class="p-6">
    <h2 class="text-center">All Pages</h2>

    <h2>VAppBar</h2>
    <VAppBar color="primary">Vue adalah</VAppBar>
    <VAppBar size="sm"> Hello World </VAppBar>
    <VAppBar size="md"> Hello World </VAppBar>
    <VAppBar size="lg"> Hello World </VAppBar>
    <VAppBar size="auto"> Hello World </VAppBar>

    <br />
    <h2>VBadge</h2>
    <VBadge> Hello World </VBadge>
    <VBadge color="primary"> Hello World </VBadge>
    <VBadge color="secondary"> Hello World </VBadge>
    <VBadge color="info"> Hello World </VBadge>
    <VBadge color="warning"> Hello World </VBadge>
    <VBadge color="success"> Hello World </VBadge>
    <VBadge color="error"> Hello World </VBadge>

    <br />
    <br />
    <VBtn @click="isOpen = !isOpen">Open BottomSheet</VBtn>

    <VBottomSheet v-model="isOpen" v-slot="{ close }">
      <VBottomSheetMenus v-model="selected" :items="menus" hover />
      <VBottomSheetFooter>
        <Button @click="close">Done</Button>
        <Button @click="selected = []">Clear</Button>
      </VBottomSheetFooter>
    </VBottomSheet>

    <br />
    <VBtn @click="isOpen = !isOpen">Open BottomSheet</VBtn>
    <VBottomSheet v-model="isOpen" v-slot="{ close }">
      <VBottomSheetMenus v-model="selected" :items="menus" hover multiple />
      <VBottomSheetFooter>
        <Button @click="close">Done</Button>
        <Button @click="selected = []">Clear</Button>
      </VBottomSheetFooter>
    </VBottomSheet>

    <br />
    <br />
    <VBreadcrumbs :items="items" />
    <VBreadcrumbs :items="items" divider=">" />
    <v-breadcrumbs>
      <v-breadcrumbs-item to="/"> Home </v-breadcrumbs-item>
      <v-breadcrumbs-divider />
      <v-breadcrumbs-item to="/account"> Account </v-breadcrumbs-item>
      <v-breadcrumbs-divider />
      <v-breadcrumbs-item to="/account/profile" disabled>
        Profile
      </v-breadcrumbs-item>
    </v-breadcrumbs>
    <br />
    <br />
    <h2>CARD</h2>
    <VCard title="Header">
      <!-- footer slot -->
      <template #footer>
        <VBtn> Action </VBtn>
      </template>
      <!-- body -->
      <p>Hello World</p>
    </VCard>
    <br />
    <VCard color="primary"> Hello World </VCard>
    <VCard color="secondary"> Hello World </VCard>
    <VCard color="info"> Hello World </VCard>
    <VCard color="warning"> Hello World </VCard>
    <VCard color="success"> Hello World </VCard>
    <VCard color="error"> Hello World </VCard>
    <br />
    <br />
    <h2>Collapsible</h2>
    <VCollapsible hide-icon />
    <VCollapsible :model-value="true" />
    <br />
    <br />
    <h2>DataTable</h2>
    <VDataTable :items="itemes" :headers="headeres" />
    <VDataTable striped />
    <VDataTable hover />
    <VDataTable flat />
    <br />
    <br />
    <h3>Data Table Pagination</h3>
    <v-data-table-pagination>
      <template #rowsPerPage="{ value, items }">
        <select :value="value">
          <option v-for="item in items" :value="itemes.value">
            {{ itemes.text }}
          </option>
        </select>
      </template>
    </v-data-table-pagination>
    <br />
    <br />
    <h2>Dropdown</h2>
    <VDropdown :items="items3" />
    <VDropdown right />
    <VDropdown top />
    <br />
    <br />
    <h2>Icon</h2>
    <VIcon name="ic:round-home" />
    <VIcon name="ri:search-line" size="xxs" />
    <VIcon name="ri:search-line" size="xs" />
    <VIcon name="ri:search-line" size="sm" />
    <VIcon name="ri:search-line" size="md" />
    <VIcon name="ri:search-line" size="lg" />
    <VIcon name="ri:search-line" size="xl" />
    <VIcon name="ri:search-line" size="50" />
    <VIcon name="ri:search-line" :size="70" />
    <br />
    <br />
    <h3>List Item</h3>
    <VList>
      <VListItem>Item 1</VListItem>
      <VListItem>Item 2</VListItem>
      <VListItemDivider />
      <VListItem>Item 3</VListItem>
      <VListItemDivider />
      <VListItem>Item 4</VListItem>
      <VListItem>Item 5</VListItem>
    </VList>
    <VList hover>
      <VListItem>Default</VListItem>
      <VListItem hover hover-class="hover:bg-red-200 hover:text-red-700">
        Affan
      </VListItem>
      <VListItem
        hover
        hover-class="group-hover:bg-blue-200 group-hover:text-blue-700"
      >
        Maulana
      </VListItem>
    </VList>
    <VList shaped>
      <VListItem shaped v-for="i in 5" :key="i">Item</VListItem>
      <VListItem hover shaped shaped-class="rounded-l-full">
        Custom Shaped Class
      </VListItem>
    </VList>
    <VList>
      <VListItem hover rounded v-for="i in 5" :key="i">Item</VListItem>
    </VList>
    <br />
    <br />
    <h3>Logo</h3>
    <VLogo />
    <VLogo white />
    <v-logo img-class="h-10" />
    <v-logo to="/" />
    <br />
    <br />
    <h3>Menu</h3>
    <VMenu :menu="item4" small />
    <br />
    <br />
    <h3>Menu's</h3>
    <div class="space-y-2">
      <VAppBar shadow>
        <span class="font-semibold mr-4">Default</span>
        <nav aria-label="Nav" class="flex gap-3 items-center">
          <VMenus label="Home" :items="items" />
          <VMenus label="About" :items="items" />
          <VMenus label="Profile" :items="items" />
        </nav>
      </VAppBar>
      <VAppBar shadow>
        <span class="font-semibold mr-4">Small</span>
        <nav aria-label="Nav" class="flex gap-3 items-center">
          <VMenus label="Home" :items="items5" small />
          <VMenus label="About" :items="items5" small />
          <VMenus label="Profile" :items="items5" small />
        </nav>
      </VAppBar>
      <VAppBar shadow class="flex justify-between">
        <span class="font-semibold mr-4">Right</span>
        <nav aria-label="Nav" class="flex gap-3 items-center">
          <VMenus label="Home" :items="items5" right />
          <VMenus label="About" :items="items5" right />
          <VMenus label="Profile" :items="items5" right />
        </nav>
      </VAppBar>
    </div>
    <br />
    <br />
    <h3>Modal</h3>
    <VModal v-model="isOpen">
      <template #activator="{ open }">
        <v-btn @click="open">Click Me</v-btn>
      </template>
      Hello World
    </VModal>
    <br />
    <br />
    <h3>Navigation Drawer</h3>
    <NavDrawer>
      <p class="font-semibold">Hello World</p>
    </NavDrawer>
    <NavDrawer color="primary">
      <p class="font-semibold">Hello World</p>
    </NavDrawer>
    <br />
    <br />
    <h3>Pagination</h3>
    <VPagination
      v-model="page"
      :total-items="totalItems"
      :items-per-page="itemsPerPage"
    />
    <br />
    <br />
    <h3>Progress Bar</h3>
    <VProgressBar :model-value="70" />
    <VProgressBar color="primary" :model-value="70" />
    <VProgressBar color="secondary" :model-value="70" />
    <VProgressBar color="info" :model-value="70" />
    <VProgressBar color="warning" :model-value="70" />
    <VProgressBar color="success" :model-value="70" />
    <VProgressBar color="error" :model-value="70" />
    <VProgressBar color="dark" :model-value="70" />
    <br />
    <br />
    <h3>Rating</h3>
    <VRating v-model:rating="rating" />
    <br />
    <br />
    <h3>Select</h3>
    <VSelect :items="items" />
    <br />
    <br />
    <h3>Shimmer</h3>
    <VShimmer />
    <br />
    <br />
    <h3>Spineer</h3>
    <VSpinner />
    <br />
    <br />
    <h3>Stepper</h3>
    <VStepper :items="items6"></VStepper>
    <br />
    <br />
    <h3>Switch</h3>
    <VSwitch v-model="checked" label="Label" />
    <br />
    <br />
    <h3>Tabs</h3>
    <VTabs :items="items6" />
    <br />
    <br />
    <h3>Toast</h3>
    <VBtn @click="isOpen = !isOpen">
      {{ isOpen ? "Close" : "Open" }} Toast
    </VBtn>
    <VToast v-model="isOpen"> Hallo affan </VToast>
    <br />
    <br />
    <h3>VToolTIP</h3>
    <VTooltip placement="top">
      <template #activator="{ on }">
        <VBtn v-on="on"> Hove me </VBtn>
      </template>
      <span>Hello :)</span>
    </VTooltip>
    <br />
    <br />
  </div>
</template>
