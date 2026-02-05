// Site Search for ASPAI 2026
(function() {
  // Search index - pages and their content keywords
  const searchIndex = [
    {
      url: 'index.html',
      title: 'Home',
      keywords: 'ASPAI 2026 Asia-Pacific Symposium Process Artificial Intelligence Pohang Korea August conference summer school welcome APPI Network',
      content: 'Welcome to Pohang, South Korea! The 2nd Asia-Pacific Symposium on Process and Artificial Intelligence. August 24-28, 2026 at POSTECH, Pohang University of Science and Technology.'
    },
    {
      url: 'general-info.html',
      title: 'General Information',
      keywords: 'key dates paper submission notification camera-ready registration deadline accommodation hotels venue POSTECH POSCO International Center committee chairs',
      content: 'Key Dates: Paper Submission March 30, Notification April 30, Camera-Ready May 14, Registration Deadline May 31, Symposium August 24-28. Accommodation options include POSCO International Center, Hotels in Youngildae, Noblion Hotel, Lahan Hotel.'
    },
    {
      url: 'general-info.html#key-dates',
      title: 'Key Dates',
      keywords: 'dates deadline submission notification camera-ready registration',
      content: 'Paper Submission: March 30, 2026. Notification: April 30, 2026. Camera-Ready: May 14, 2026. Registration Deadline: May 31, 2026. Symposium: August 24-28, 2026.'
    },
    {
      url: 'general-info.html#accommodation',
      title: 'Accommodation',
      keywords: 'hotel accommodation stay lodging Youngildae Lahan Noblion POSCO',
      content: 'POSCO International Center on-site, Hotels in Youngildae 20-30 min, Noblion Hotel, Lahan Hotel 30 min by taxi.'
    },
    {
      url: 'general-info.html#venue',
      title: 'Venue',
      keywords: 'venue location POSTECH POSCO International Center Pohang address map',
      content: 'POSTECH POSCO International Center, 77 Cheongam-ro, Nam-gu, Pohang, South Korea.'
    },
    {
      url: 'general-info.html#committee',
      title: 'Organizing Committee',
      keywords: 'committee chairs organizers program Mahendrawathi Jongchan Kim members',
      content: 'Program Chairs: Mahendrawathi ER (Institut Teknologi Sepuluh Nopember), Jongchan Kim (Yonsei University). Program Committee members from QUT, POSTECH, UNIST, and more.'
    },
    {
      url: 'conference.html',
      title: 'Conference Program',
      keywords: 'conference program schedule keynote speakers sessions presentations Industry Day',
      content: 'Day 1: Process Mining Industry Day Seoul. Day 2-3: Keynotes and paper presentations. Keynote Speakers: Wil van der Aalst (RWTH Aachen), Jan vom Brocke (University of Münster).'
    },
    {
      url: 'conference.html#keynotes',
      title: 'Keynote Speakers',
      keywords: 'keynote speakers Wil van der Aalst Jan vom Brocke',
      content: 'Keynote Speakers: Wil van der Aalst (RWTH Aachen University), Jan vom Brocke (University of Münster).'
    },
    {
      url: 'call-for-papers.html',
      title: 'Call for Papers',
      keywords: 'call for papers CFP submission topics AI process mining governance ethics digital transformation CEUR publication',
      content: 'Submit papers on Process Intelligence & AI, Governance, Risk, Ethics, Digital Transformation, Industry Practice. Full papers max 10 pages, Short papers max 5 pages. Published in CEUR Workshop Proceedings. Double-blind peer review.'
    },
    {
      url: 'summer-school.html',
      title: 'Summer School',
      keywords: 'summer school APPI process mining training workshop hands-on PM4Py Celonis',
      content: 'The 1st APPI Summer School on Process Intelligence. August 27-28, 2026 at POSTECH. Learn process discovery, conformance checking, performance analysis, OCPM, predictive analytics.'
    },
    {
      url: 'summer-school-program.html',
      title: 'Summer School Program Details',
      keywords: 'summer school program schedule sessions process discovery conformance checking OCPM PM4Py Celonis workshop',
      content: 'Day 1: Foundations of Process Mining, Process Discovery Algorithms, Hands-on PM4Py, Conformance Checking. Day 2: Performance Analysis, Celonis Workshop, OCPM, Predictive Process Monitoring.'
    },
    {
      url: 'summer-school-lecturers.html',
      title: 'Summer School Lecturers',
      keywords: 'lecturers speakers instructors Wil van der Aalst Marlon Dumas Hajo Reijers Minseok Song Celonis SAP',
      content: 'Academic Lecturers: Prof. Wil van der Aalst (RWTH Aachen), Prof. Marlon Dumas (University of Tartu), Prof. Hajo Reijers (Utrecht University), Prof. Minseok Song (POSTECH). Industry Speakers from Celonis and SAP.'
    },
    {
      url: 'registration.html',
      title: 'Registration',
      keywords: 'registration fee price cost conference summer school USD payment',
      content: 'Conference: USD $200 (Aug 25-26). Summer School: USD $150 (Aug 27-28). Conference + Summer School: USD $300 (Aug 25-28).'
    },
    {
      url: 'sponsors.html',
      title: 'Sponsors',
      keywords: 'sponsors partners Celonis SAP Puzzle Data support',
      content: 'Proudly sponsored by Celonis, SAP, and Puzzle Data.'
    },
    {
      url: 'faq.html',
      title: 'FAQs',
      keywords: 'FAQ frequently asked questions help contact support',
      content: 'For any questions about the ASPAI conference, please contact jonghyeon.ko@qut.edu.au'
    }
  ];

  function search(query) {
    if (!query || query.length < 2) return [];
    
    const lowerQuery = query.toLowerCase();
    const results = [];
    
    searchIndex.forEach(page => {
      const titleMatch = page.title.toLowerCase().includes(lowerQuery);
      const keywordMatch = page.keywords.toLowerCase().includes(lowerQuery);
      const contentMatch = page.content.toLowerCase().includes(lowerQuery);
      
      if (titleMatch || keywordMatch || contentMatch) {
        let score = 0;
        if (titleMatch) score += 10;
        if (keywordMatch) score += 5;
        if (contentMatch) score += 1;
        
        // Create snippet with highlighted text
        let snippet = page.content;
        const queryIndex = snippet.toLowerCase().indexOf(lowerQuery);
        if (queryIndex !== -1) {
          const start = Math.max(0, queryIndex - 40);
          const end = Math.min(snippet.length, queryIndex + query.length + 60);
          snippet = (start > 0 ? '...' : '') + 
                    snippet.substring(start, end) + 
                    (end < snippet.length ? '...' : '');
        } else {
          snippet = snippet.substring(0, 100) + '...';
        }
        
        // Highlight matches
        const regex = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
        snippet = snippet.replace(regex, '<mark>$1</mark>');
        
        results.push({
          url: page.url,
          title: page.title,
          snippet: snippet,
          score: score
        });
      }
    });
    
    // Sort by score descending
    results.sort((a, b) => b.score - a.score);
    
    return results.slice(0, 8); // Return top 8 results
  }

  function renderResults(results, query) {
    const container = document.getElementById('searchResults');
    if (!container) return;
    
    if (results.length === 0) {
      container.innerHTML = '<div class="search-no-results">No results found for "' + query + '"</div>';
      container.classList.add('active');
      return;
    }
    
    let html = '<div class="search-results-header">' + results.length + ' result' + (results.length > 1 ? 's' : '') + ' found</div>';
    
    results.forEach(result => {
      html += '<a href="' + result.url + '" class="search-result-item">' +
              '<div class="search-result-title">' + result.title + '</div>' +
              '<div class="search-result-snippet">' + result.snippet + '</div>' +
              '</a>';
    });
    
    container.innerHTML = html;
    container.classList.add('active');
  }

  function hideResults() {
    const container = document.getElementById('searchResults');
    if (container) {
      container.classList.remove('active');
    }
  }

  // Initialize search
  document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchResults = document.getElementById('searchResults');
    
    if (!searchInput) return;
    
    // Search on input
    let debounceTimer;
    searchInput.addEventListener('input', function() {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function() {
        const query = searchInput.value.trim();
        if (query.length >= 2) {
          const results = search(query);
          renderResults(results, query);
        } else {
          hideResults();
        }
      }, 200);
    });
    
    // Search on button click
    searchBtn.addEventListener('click', function() {
      const query = searchInput.value.trim();
      if (query.length >= 2) {
        const results = search(query);
        renderResults(results, query);
      }
    });
    
    // Search on Enter key
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query.length >= 2) {
          const results = search(query);
          renderResults(results, query);
        }
      }
      if (e.key === 'Escape') {
        hideResults();
        searchInput.blur();
      }
    });
    
    // Hide results when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.search-box')) {
        hideResults();
      }
    });
    
    // Show results on focus if there's a query
    searchInput.addEventListener('focus', function() {
      const query = searchInput.value.trim();
      if (query.length >= 2) {
        const results = search(query);
        renderResults(results, query);
      }
    });
  });
})();
