<script>
  import Center from '$lib/components/primitives/layout/Center.svelte'
  import Modal, { prepareDOM } from './Modal.svelte'

  export let contain
  export let prompt = "default prompt value from ModalWithButton.svelte"

  const displayDialog = (message, bool) => {
    prepareDOM()
    const modal = new Modal({
      target: document.body,
      props: {
        dialogMessage: message,
        contain: bool
      }
    })
  }

</script>

<Center>
  <button id="showModal" on:click={displayDialog(prompt, contain)}>Show Modal</button>
</Center>


<style>

  button#showModal {
    background: blue;
    color: #eafdf8;
    padding: 0.5rem;
    cursor: pointer;
  }

</style>