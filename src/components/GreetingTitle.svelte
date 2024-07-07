<script lang="ts">
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const userName = 'Safnas'

  let greeting = "";

  if (currentHour >= 5 && currentHour < 12) {
    greeting = `Good morning ${userName}!`;
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = `Good afternoon ${userName}!`;
  } else {
    greeting = `Good Evening ${userName}!`;
  }
</script>

<h1 class="text-3xl m-6">{greeting}</h1>
