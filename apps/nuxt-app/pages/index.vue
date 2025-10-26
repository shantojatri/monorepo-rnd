<template>
  <!-- <div class="min-h-screen flex items-center justify-center bg-slate-50">
    <div class="p-8 bg-white rounded shadow">
      <h1 class="text-2xl font-bold mb-4 text-red-600">Nuxt App</h1>
      <ui-button>Shared UI Button Nuxt</ui-button>
    </div>
    <Modal />
  </div> -->
   <h1 class="text-3xl font-bold underline text-red-500">
    Hello world!
  </h1>
  <div></div>
  <div></div>
  <Dialog>
    <DialogTrigger>
      Edit Profile
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>

      <DialogFooter>
        Save changes
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup>
// import { UiButton, Modal } from '@workspace/ui'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../../libs/ui/src/components/ui/dialog'
</script>
