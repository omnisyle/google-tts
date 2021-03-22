<script lang="ts">
  import {onMount} from 'svelte';

  let hide = false;
  let apiKey = '';

  onMount(() => {
    apiKey = window.localStorage.getItem('apiKey') || '';

    if (apiKey !== '') {
      hide = true;
    }
  });

  const toggleApiKey = () => {
    hide = !hide;
  };
</script>

<div class="ApiKey">
  {#if !hide}
    <div class="input-group">
      <label for="api-key" class="block text-gray-700 mb-1"> API Key </label>
      <input
        name="api-key"
        type="text"
        class="text-input"
        placeholder="Enter your API key"
        bind:value={apiKey}
      />
    </div>
  {/if}

  <!-- svelte-ignore a11y-invalid-attribute -->
  <a href="#" class="text-sm text-blue-600" on:click|preventDefault={toggleApiKey}>
    {#if hide}
      Show
    {:else}
      Hide
    {/if}
    {" "}api key
  </a>
</div>

