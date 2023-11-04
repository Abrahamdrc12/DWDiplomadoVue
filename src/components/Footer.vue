<script setup>
import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand } from 'flowbite-vue'
</script>

<template>
  <Footer footer-type="logo" class="">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <FooterBrand href="https://flowbite.com" src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite Logo" name="Admin Panel" />
        <FooterLinkGroup class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <FooterLink href="/">Rosa Morelo</FooterLink>
          <FooterLink href="/">Mario Bula</FooterLink>
          <FooterLink href="/">Marco Aguirre</FooterLink>
          <FooterLink href="/">Abraham Rodriguez</FooterLink>
        </FooterLinkGroup>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <FooterCopyright class="text-white" href="/" by="Flowbite™" />
    </div>
  </Footer>
</template>