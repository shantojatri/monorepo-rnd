<template>
  <h1 class="text-3xl font-bold underline text-red-500">
    Hello world!
  </h1>
  <Button>Click me</Button>
  <div></div>
  <div></div>
  <Title/>
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

<script setup lang="ts">
import { Button } from '../../../libs/ui/src/components/ui/button' 
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../../libs/ui/src/components/ui/dialog'
import  Title from '../../../libs/ui/src/components/Title.vue' 
</script>