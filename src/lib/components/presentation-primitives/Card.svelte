<script>


</script>

<section class="card-container">
  <slot />
</section>

<style>

  .card-container {
    background: var(--card-bg-color, #fff);
    display: flex;
    padding: var(--card-padding, 1rem);
    border: var(--card-border, 1px solid #aaa);
    border-radius: var(--card-border-radius, 2px);
    box-shadow: var(--card-box-shadow, 2px 2px 8px rgba(0, 0, 0, 0.1));
  }

  @media (min-width: 960px) {
    
  }
</style>