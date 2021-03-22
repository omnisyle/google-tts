<script lang="ts">
</script>

<main>
  <div class="container max-w-lg mx-auto">
    <div class="p-4">
      <h1 class="text-3xl mb-4">Google TTS</h1>
      <div class="flex flex-col form">
        <div class="input-group">
          <label for="api-key" class="block text-gray-700 mb-1">
            API Key
          </label>
          <input
            name="api-key"
            type="text"
            class="text-input"
            placeholder="Enter your API key"
          />
        </div>

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

<style>
  .text-input {
    @apply block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50;
  }

  .input-group {
    @apply block mb-2;
  }

  .submit-btn {
    @apply flex-shrink-0 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200;
  }
</style>
