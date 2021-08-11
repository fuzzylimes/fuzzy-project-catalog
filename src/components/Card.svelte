<script>
    import Tag from './Tag.svelte';

    export let project;
</script>

<div class="card">
  <header class="card-header">
    <p class="card-header-title title is-4 has-text-info">
      {project.display}
    </p>
  </header>
  <div class="card-image">
    <figure class="image is-4by3">
        {#if project.image !== ''}
      <img src={project.image} alt="Project example">
      {:else}
      <img src="/images/default.jpg" alt="No preview available">
      {/if}
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4 is-link"><a href={project.url}>Visit Site</a> | <a href={project.github}>github</a></p>
      </div>
    </div>

    <div class="content">
      {project.description}
      <br><br>
      <span>{project.completed}</span>
      <br><br>
      {#each project.tags as tag}
        <Tag tag={tag}/>
      {/each}
    </div>
  </div>
</div>

<style>
    .card {
        background-color: #F2F1EF;
        /* height: 100%;
        display: flex;
        flex-direction: column; */
    }
</style>