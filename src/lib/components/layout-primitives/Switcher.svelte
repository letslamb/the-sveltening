

<div class="switcher">
  <div> <!-- intermediary wrapper -->
    <div>
      <!-- child element -->
      <slot name="switcher-first-child" />
    </div>
    <div>
      <!-- another child element -->
      <slot name="switcher-second-child" />
    </div>
    <div>
      <slot name="switcher-third-child" />
    </div>
  </div>
</div>

<style>

.switcher > * {
  display: flex;
  flex-wrap: wrap;
  margin: calc((var(--s1) / 2) * -1);
}

.switcher > * > * {
  flex-grow: 1;
  flex-basis: calc((var(--measure) - (100% - var(--s1))) * 999);
  margin: calc(var(--s1) / 2);
}

.switcher > * > :nth-last-child(n+5),
.switcher > * > :nth-last-child(n+5) ~ * {
  flex-basis: 100%;
}

</style>