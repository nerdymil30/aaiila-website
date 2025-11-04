<script setup lang="ts">
// No props needed - static content
</script>

<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <!-- Centered Heading -->
      <div class="mb-12">
        <div class="welcome-heading text-center mx-auto">
          <h2 class="welcome-title">
            Welcome to the official site of the Los Angeles Chapter of the
            <em class="welcome-emphasis">American Association of Individual Investors</em> (AAII).
          </h2>
        </div>
      </div>

      <!-- Two Column Layout: Content and Image -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Left Column: Text Content -->
        <div class="welcome-text space-y-4">
          <p class="text-left">
            Here you'll learn about the more than 30 non-profit educational events we sponsor each year and find links to other investing web pages. All of this is provided by local volunteers in an effort to help you learn to be a wiser, more profitable investor. Membership in AAII is <strong>not</strong> required to attend our meetings.
          </p>
          <p class="text-left">
            AAII (the National Headquarters) is an independent non-profit educational organization, based in Chicago, with over 150,000 members. For more information about AAII,
            <a
              href="https://www.aaii.com/join/index29f_2?clicksrc=viacomplex-nav"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 hover:text-blue-700 underline"
            >click here</a>
            to go to the American Association of Individual Investors Website.
          </p>
          <p class="text-left">
            Each AAII local chapter is a grassroots organizations led by volunteer AAII members, allowing AAII to extend its mission to individual investors in their own communities by organizing meetings to provide unbiased investment education in a social context.
          </p>
        </div>

        <!-- Right Column: Image -->
        <div class="flex items-start justify-center">
          <img
            src="/homepage-images/11123538363_1565252b96_o.jpg"
            alt="AAII Meeting"
            class="welcome-image"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.welcome-heading {
  display: inline-block;
  width: 100%;
}

.welcome-title {
  font-size: 36px;
  line-height: 40px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.welcome-emphasis {
  font-style: italic;
  color: inherit;
}

.welcome-text {
  color: #555555;
}

.welcome-text strong {
  color: #333333;
}

.welcome-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* Responsive Typography - matches original */
@media (max-width: 1280px) and (min-width: 1024px) {
  .welcome-title {
    font-size: 32px !important;
    line-height: 36px !important;
  }
}

@media (max-width: 1023px) and (min-width: 800px) {
  .welcome-title {
    font-size: 30px !important;
    line-height: 32px !important;
  }
}

@media (max-width: 799px) {
  .welcome-title {
    font-size: 24px !important;
    line-height: 28px !important;
  }
}
</style>
