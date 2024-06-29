<script>
  import { onMount } from 'svelte';

  // Import showdown for Markdown to HTML conversion
  import showdown from 'showdown';

  let renderedMarkup = '';

  const markdown = `## Introduction to AI in Healthcare

Artificial Intelligence (AI) has revolutionized many industries, and healthcare is no exception. From improving diagnostics to personalizing treatment plans, AI offers significant potential to enhance patient outcomes and streamline operations.

## Key Applications of AI in Healthcare

### 1. Diagnostics
- *Medical Imaging:* AI algorithms can analyze medical images faster and more accurately than humans, aiding in the early detection of diseases.
- *Pathology:* AI-powered tools assist pathologists in diagnosing conditions by examining tissue samples.

### 2. Treatment Personalization
- *Genomic Data:* AI helps in interpreting genomic data to tailor treatments for individual patients.
- *Electronic Health Records (EHRs):* AI analyzes EHRs to suggest personalized treatment plans.

### 3. Operational Efficiency
- *Predictive Analytics:* AI predicts patient admissions and helps in resource allocation.
- *Automation:* Administrative tasks, such as appointment scheduling and billing, are streamlined through AI.

## Challenges and Considerations

### Data Privacy and Security
Ensuring the privacy and security of patient data is paramount. Healthcare providers must comply with regulations such as HIPAA to protect sensitive information.

### Ethical Concerns
The ethical implications of AI in healthcare include issues of bias, accountability, and transparency. Ensuring that AI systems are fair and explainable is crucial.

### Integration with Existing Systems
Integrating AI solutions with existing healthcare infrastructure can be challenging. Compatibility and interoperability are key considerations.

## Future of AI in Healthcare

The future of AI in healthcare looks promising with advancements in machine learning, natural language processing, and robotics. Continuous research and development will drive further innovations, improving patient care and operational efficiency.

## Conclusion

AI has the potential to transform healthcare by enhancing diagnostics, personalizing treatments, and improving operational efficiency. However, addressing challenges such as data privacy, ethical concerns, and system integration is essential for successful implementation.

### Sources
1. [AI in Medical Imaging: A Comprehensive Guide](https://example.com/ai-medical-imaging)
2. [The Role of AI in Genomic Medicine](https://example.com/ai-genomic-medicine)
3. [Predictive Analytics in Healthcare: Benefits and Challenges](https://example.com/predictive-analytics-healthcare)
4. [Ensuring Data Privacy in Healthcare AI](https://example.com/data-privacy-healthcare-ai)
5. [Ethical Considerations in AI Healthcare](https://example.com/ethical-ai-healthcare)`;

  // Convert Markdown to HTML on component mount
  onMount(() => {
    const converter = new showdown.Converter();
    renderedMarkup = converter.makeHtml(markdown);
  });
</script>

<div class="relative h-screen gap-2 flex items-stretch">
  <!-- Side menu component -->
  <div class="w-[350px] flex-col hidden lg:flex overflow-y-auto">
    <!-- Replace with your SideMenu component -->
    <SideMenu />
  </div>
  
  <!-- Main content area -->
  <div class="rounded-lg bg-zinc-900 flex-1 mx-auto overflow-y-auto">
    <!-- Layout component with title -->
    <Layout title="Home">
      <!-- Container with background image and header -->
      <div id="playlist-container" class="relative transition-all duration-1000 bg-context h-1/2"
        style="background-image: url('/images/cover/SriLanka.webp'); background-size: cover; background-position: center;">
        <!-- Page header component -->
        <PageHeader />

        <!-- Content area within the container -->
        <div class="relative z-10 px-6">
          <span>
            <h1 class="text-6xl font-bold">Cricket</h1>
          </span>

          <!-- Uncomment this section if you want to display playlist items -->
          <div class="grid gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-6">
            <!-- {playlists.map((playlist) => (
              <PlaylistItemCard playlist={playlist} />
            ))} -->
          </div>
        </div>

        <!-- Background gradient -->
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80"></div>
      </div>

      <!-- Markup section -->
      <div class="px-6 relative z-10 mt-4">
        <h2 class="text-2xl font-bold">Markup</h2>
        <div class="flex flex-wrap mt-6 gap-4">
          <!-- Rendered HTML from Markdown -->
          {@html renderedMarkup}
        </div>
      </div>
    </Layout>
  </div>
</div>

<!-- Browser compatibility message -->
<div id="not-support"
  class="fixed hidden bg-red-700 bottom-0 inset-x-0 rounded-t-md text-center py-2 lg:py-4 z-50 font-semibold">
  It seems your browser does not support view transitions yet :( try it using
  chrome or edge <a class="underline"
    href="https://github.com/igorm84/spotify-astro-transitions">(see docs here)</a>
</div>

<!-- JavaScript for interaction -->
<script>
  // Check for view transition support
  if (!document.startViewTransition) {
    document.getElementById("not-support").classList.remove("hidden");
  }

  // Handle page load event
  document.addEventListener("astro:page-load", () => {
    // Remove scale-90 class from elements with .el-to-fade on load
    for (const el of document.querySelectorAll(".el-to-fade")) {
      el.classList.remove("scale-90");
    }
  });
</script>
