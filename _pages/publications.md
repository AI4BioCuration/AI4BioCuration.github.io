---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.keywords %}
<div class="keyword-filter">
  <h3>Filter by Keyword:</h3>
  <div class="keyword-buttons">
    <button class="keyword-btn active" data-keyword="all">All</button>
    {% for keyword in site.author.keywords %}
      <button class="keyword-btn" data-keyword="{{ keyword | downcase | replace: ' ', '-' }}">{{ keyword }}</button>
    {% endfor %}
  </div>
</div>
{% endif %}

<div class="publications-list">
  {% for post in site.publications reversed %}
    {% if post.keywords %}
      {% assign keywords_list = "" %}
      {% for keyword in post.keywords %}
        {% assign normalized = keyword | downcase | replace: ' ', '-' %}
        {% if forloop.first %}
          {% assign keywords_list = normalized %}
        {% else %}
          {% assign keywords_list = keywords_list | append: ',' | append: normalized %}
        {% endif %}
      {% endfor %}
      {% assign pub_keywords = keywords_list %}
    {% else %}
      {% assign pub_keywords = "" %}
    {% endif %}
    
    <div class="publication-item" data-keywords="{{ pub_keywords }}">
      <h3 class="publication-title">
        {% if post.paperurl %}
          <a href="{{ post.paperurl }}" target="_blank">{{ post.title }}</a>
        {% else %}
          {{ post.title }}
        {% endif %}
      </h3>
      
      <div class="publication-meta">
        {% if post.venue %}
          <span class="venue"><strong>{{ post.venue }}</strong></span>
        {% endif %}
        
        {% if post.date %}
          <span class="date"> ({{ post.date | date: "%Y" }})</span>
        {% endif %}
      </div>
      
      <div class="publication-links">
        {% if post.paperurl %}
          <a href="{{ post.paperurl }}" class="btn btn--primary btn--small" target="_blank">Paper</a>
        {% endif %}
        
        {% if post.slidesurl %}
          <a href="{{ post.slidesurl }}" class="btn btn--primary btn--small" target="_blank">Slides</a>
        {% endif %}
        
        <a href="{{ post.url }}" class="btn btn--inverse btn--small">Details</a>
      </div>
      
      {% if post.keywords %}
        <div class="publication-keywords">
          {% for keyword in post.keywords %}
            <span class="keyword-tag">{{ keyword }}</span>
          {% endfor %}
        </div>
      {% endif %}
    </div>
  {% endfor %}
</div>

<style>
/* Keyword Filter Styles */
.keyword-filter {
  margin-bottom: 2em;
  padding: 1.5em;
  background: var(--global-bg-color);
  border: 1px solid var(--global-border-color);
  border-radius: 4px;
}

.keyword-filter h3 {
  margin-top: 0;
  margin-bottom: 1em;
  font-size: 1.1em;
}

.keyword-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
}

.keyword-btn {
  padding: 0.4em 0.8em;
  background: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
  transition: all 0.2s;
}

.keyword-btn:hover {
  background: #e0e0e0;
}

.keyword-btn.active {
  background: var(--global-link-color);
  color: white;
  border-color: var(--global-link-color);
}

/* Publication Item Styles */
.publications-list {
  margin-top: 2em;
}

.publication-item {
  margin-bottom: 2em;
  padding-bottom: 1.5em;
  border-bottom: 1px solid var(--global-border-color);
  transition: opacity 0.3s;
}

.publication-item.hidden {
  display: none;
}

.publication-title {
  margin-top: 0;
  margin-bottom: 0.5em;
  font-size: 1.2em;
  line-height: 1.4;
}

.publication-title a {
  color: var(--global-link-color);
  text-decoration: none;
}

.publication-title a:hover {
  text-decoration: underline;
}

.publication-meta {
  margin-bottom: 0.8em;
  color: #666;
  font-size: 0.95em;
}

.publication-links {
  margin-bottom: 0.8em;
}

.publication-links .btn {
  margin-right: 0.5em;
  margin-bottom: 0.5em;
}

.publication-keywords {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin-top: 0.8em;
}

.keyword-tag {
  display: inline-block;
  padding: 0.2em 0.6em;
  background: #e8f4f8;
  border: 1px solid #b8d4e0;
  border-radius: 3px;
  font-size: 0.8em;
  color: #2c5f7c;
}
</style>

<script>
(function() {
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFilter);
  } else {
    initFilter();
  }
  
  function initFilter() {
    const filterButtons = document.querySelectorAll('.keyword-btn');
    const publications = document.querySelectorAll('.publication-item');
    
    console.log('Filter initialized');
    console.log('Found ' + filterButtons.length + ' filter buttons');
    console.log('Found ' + publications.length + ' publications');
    
    filterButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const keyword = this.getAttribute('data-keyword');
        console.log('Clicked keyword: ' + keyword);
        
        // Update active button
        filterButtons.forEach(function(btn) {
          btn.classList.remove('active');
        });
        this.classList.add('active');
        
        // Filter publications
        publications.forEach(function(pub) {
          const pubKeywords = pub.getAttribute('data-keywords') || '';
          console.log('Publication keywords: "' + pubKeywords + '"');
          
          if (keyword === 'all') {
            pub.classList.remove('hidden');
          } else if (pubKeywords === '') {
            // No keywords, hide it when filtering
            pub.classList.add('hidden');
          } else {
            // Check if the keyword is in the comma-separated list
            const keywordList = pubKeywords.split(',');
            if (keywordList.indexOf(keyword) !== -1) {
              pub.classList.remove('hidden');
            } else {
              pub.classList.add('hidden');
            }
          }
        });
      });
    });
  }
})();
</script>
