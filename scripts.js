// Global variables to store loaded data
let brandingData = {};
let themeData = {};
let gamesData = {};

// Initialize the site when DOM is loaded
document.addEventListener('DOMContentLoaded', async function() {
    try {
        // Load all JSON data files
        await loadAllData();
        
        // Apply branding and theme
        applyBranding();
        applyTheme();
        
        // Populate content
        populateGames();
        startCountdown();
        
        console.log('Site initialized successfully!');
    } catch (error) {
        console.error('Error initializing site:', error);
        // Fallback to default content if JSON files fail to load
        displayDefaultContent();
    }
});

// Load all JSON data files
async function loadAllData() {
    try {
        // Load branding data
        const brandingResponse = await fetch('./data/branding.json');
        brandingData = await brandingResponse.json();
        
        // Load theme data
        const themeResponse = await fetch('./data/theme.json');
        themeData = await themeResponse.json();
        
        // Load games data
        const gamesResponse = await fetch('./data/games.json');
        gamesData = await gamesResponse.json();
        
        console.log('All data loaded successfully');
    } catch (error) {
        console.error('Error loading data files:', error);
        throw error;
    }
}

// Apply branding from branding.json
function applyBranding() {
    if (!brandingData.brand) return;
    
    const brand = brandingData.brand;
    
    // Set favicon
    if (brand.logo && brand.logo.favicon) {
        const favicon = document.getElementById('favicon');
        favicon.href = brand.logo.favicon;
    }
    
    // Set logo
    if (brand.logo && brand.logo.title) {
        const logo = document.getElementById('site-logo');
        logo.src = brand.logo.title;
        logo.style.display = 'block';
        logo.alt = brand.organizationName || 'Site Logo';
    }
    
    // Set organization name as site title
    if (brand.organizationName) {
        const siteTitle = document.getElementById('site-title');
        siteTitle.textContent = brand.organizationName;
        document.title = brand.organizationName;
    }
    
    // Set slogan
    if (brand.slogan) {
        const heroSlogan = document.getElementById('hero-slogan');
        heroSlogan.textContent = brand.slogan;
    }
    
    // Set contact information
    if (brand.email) {
        const contactEmail = document.getElementById('contact-email');
        contactEmail.textContent = `Email: ${brand.email}`;
    }
    
    if (brand.mobile) {
        const contactPhone = document.getElementById('contact-phone');
        contactPhone.textContent = `Phone: ${brand.mobile}`;
    }
    
    // Set social media links
    if (brand.socialMedia) {
        populateSocialLinks(brand.socialMedia);
    }
}

// Apply theme from theme.json and branding colors
function applyTheme() {
    const root = document.documentElement;
    
    // Apply theme colors if theme.json is loaded
    if (themeData.theme && themeData.theme.colors) {
        Object.entries(themeData.theme.colors).forEach(([key, value]) => {
            root.style.setProperty(`--${key}`, value);
        });
    }
    
    // Override with branding colors if available
    if (brandingData.brand && brandingData.brand.colors) {
        Object.entries(brandingData.brand.colors).forEach(([key, value]) => {
            root.style.setProperty(`--${key}`, value);
        });
    }
    
    // Apply font if available
    if (themeData.theme && themeData.theme.font) {
        root.style.setProperty('--font-family', themeData.theme.font);
    }
}

// Populate social media links
function populateSocialLinks(socialMedia) {
    const socialContainer = document.getElementById('social-media-links');
    socialContainer.innerHTML = '';
    
    Object.entries(socialMedia).forEach(([platform, url]) => {
        if (url) {
            const link = document.createElement('a');
            link.href = url;
            link.textContent = platform.charAt(0).toUpperCase() + platform.slice(1);
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.setAttribute('aria-label', `Visit our ${platform} page`);
            socialContainer.appendChild(link);
        }
    });
}

// Populate games from games.json
function populateGames() {
    if (!gamesData.games) return;
    
    const gamesGrid = document.getElementById('games-grid');
    gamesGrid.innerHTML = '';
    
    // Update site title and tagline if available
    if (gamesData.siteTitle) {
        document.title = gamesData.siteTitle;
        document.getElementById('hero-title').textContent = gamesData.siteTitle;
    }
    
    if (gamesData.tagline) {
        document.getElementById('hero-slogan').textContent = gamesData.tagline;
    }
    
    // Create game cards
    gamesData.games.forEach(game => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
    });
}

// Create individual game card
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.setAttribute('role', 'listitem');
    
    card.innerHTML = `
        ${game.thumb ? `<img src="${game.thumb}" alt="${game.name}" loading="lazy">` : ''}
        <h3>${game.name}</h3>
        <p>${game.description}</p>
        <span class="difficulty ${game.difficulty}">${game.difficulty}</span>
        <br>
        <a href="${game.url}" class="play-button" target="_blank" rel="noopener noreferrer" 
           aria-label="Play ${game.name}">Play Now</a>
    `;
    
    return card;
}

// Start countdown timer
function startCountdown() {
    if (!gamesData.countdownTarget) return;
    
    const countdownDisplay = document.getElementById('countdown-display');
    const targetDate = new Date(gamesData.countdownTarget).getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance < 0) {
            countdownDisplay.textContent = 'New game available now!';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        countdownDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    
    // Update countdown immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Fallback content if JSON files fail to load
function displayDefaultContent() {
    console.log('Displaying default content due to loading error');
    
    // Add default games
    const gamesGrid = document.getElementById('games-grid');
    gamesGrid.innerHTML = `
        <div class="game-card">
            <h3>Adventure Quest</h3>
            <p>Embark on an epic adventure through magical lands!</p>
            <span class="difficulty easy">Easy</span><br>
            <a href="#" class="play-button">Play Now</a>
        </div>
        <div class="game-card">
            <h3>Puzzle Master</h3>
            <p>Challenge your mind with brain-teasing puzzles!</p>
            <span class="difficulty medium">Medium</span><br>
            <a href="#" class="play-button">Play Now</a>
        </div>
    `;
    
    // Set default countdown
    document.getElementById('countdown-display').textContent = 'Coming soon!';
}

// TODO: student exercise - Add game search functionality
function searchGames(searchTerm) {
    if (!gamesData.games) return;
    
    const filteredGames = gamesData.games.filter(game => 
        game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    
    displayFilteredGames(filteredGames);
}

// TODO: student exercise - Add game filtering by difficulty
function filterGamesByDifficulty(difficulty) {
    if (!gamesData.games) return;
    
    const filteredGames = difficulty === 'all' 
        ? gamesData.games 
        : gamesData.games.filter(game => game.difficulty === difficulty);
    
    displayFilteredGames(filteredGames);
}

// Helper function to display filtered games
function displayFilteredGames(games) {
    const gamesGrid = document.getElementById('games-grid');
    gamesGrid.innerHTML = '';
    
    if (games.length === 0) {
        gamesGrid.innerHTML = '<p class="no-games">No games found matching your criteria.</p>';
        return;
    }
    
    games.forEach(game => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
    });
}

// TODO: student exercise - Add dark mode toggle
function toggleDarkMode() {
    // Toggle between light and dark themes
    // Update CSS variables accordingly
}

// TODO: student exercise - Add game favorites functionality
function toggleFavorite(gameId) {
    // Add/remove game from favorites
    // Store in localStorage
    // Update UI to show favorite status
}

// TODO: student exercise - Add smooth scrolling navigation
function smoothScrollTo(elementId) {
    // Smooth scroll to section
    // Update active navigation state
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        loadAllData,
        applyBranding,
        applyTheme,
        populateGames,
        createGameCard,
        startCountdown
    };
}
