<script lang="ts">
  import ApiKey from './lib/ApiKey.svelte';
</script>

<main>
  <div class="container max-w-lg mx-auto">
    <div class="p-4">
      <h1 class="text-3xl mb-4">Google TTS</h1>
      <div class="flex flex-col form">
        <ApiKey />

        <div class="input-group">
          <label for="body" class="block text-gray-700 mb-1">
            Text body
          </label>
          <textarea
            name="body"
            class="text-input"
            placeholder="What do you want me to say?"
          />
        </div>

        <div class="input-group">
          <label for="body" class="block text-gray-700 mb-1">
            Language
          </label>
          <select name="lang" class="text-input">
            <option value="">Select a language</option>
          </select>
        </div>

        <div class="input-group">
          <label for="voice" class="block text-gray-700 mb-1">
            Voice
          </label>
          <select name="voice" class="text-input">
            <option value="">Select a voice</option>
          </select>
        </div>

        <div class="flex">
          <div class="input-group flex-1 pr-2">
            <label for="speed" class="flex justify-between mb-1">
              <span class="text-gray-700">Speed</span>
              <span class="text-gray-700">1.0</span>
            </label>

            <input name="speed" type="range" class="text-input" />
          </div>

          <div class="input-group flex-1 pr-2">
            <label for="voice" class="flex justify-between mb-1">
              <span class="text-gray-700">Voice</span>
              <span class="text-gray-700">1.0</span>
            </label>

            <input name="voice" type="range" class="text-input" />
          </div>
        </div>

        <button class="submit-btn w-44 mt-4">
          Submit
        </button>
      </div>
    </div>
  </div>
</main>
