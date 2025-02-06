interface SearchAnalytics {
  term: string;
  resultCount: number;
  timestamp: string;
}

interface FilterAnalytics {
  filterType: string;
  value: string | string[];
  timestamp: string;
}

interface Analytics {
  searches: SearchAnalytics[];
  filters: FilterAnalytics[];
  popularSearches: Map<string, number>;
  popularFilters: Map<string, number>;
}

// Initialize analytics storage
const analytics: Analytics = {
  searches: [],
  filters: [],
  popularSearches: new Map(),
  popularFilters: new Map()
};

// Track search analytics
export const trackSearchAnalytics = (data: SearchAnalytics) => {
  analytics.searches.push(data);
  
  // Update popular searches
  const currentCount = analytics.popularSearches.get(data.term) || 0;
  analytics.popularSearches.set(data.term, currentCount + 1);
  
  // Store in localStorage
  try {
    localStorage.setItem('portfolio_search_analytics', JSON.stringify({
      searches: analytics.searches,
      popularSearches: Array.from(analytics.popularSearches.entries())
    }));
  } catch (error) {
    console.error('Error saving search analytics:', error);
  }
};

// Track filter analytics
export const trackFilterAnalytics = (data: FilterAnalytics) => {
  analytics.filters.push(data);
  
  // Update popular filters
  const filterKey = `${data.filterType}:${Array.isArray(data.value) ? data.value.join(',') : data.value}`;
  const currentCount = analytics.popularFilters.get(filterKey) || 0;
  analytics.popularFilters.set(filterKey, currentCount + 1);
  
  // Store in localStorage
  try {
    localStorage.setItem('portfolio_filter_analytics', JSON.stringify({
      filters: analytics.filters,
      popularFilters: Array.from(analytics.popularFilters.entries())
    }));
  } catch (error) {
    console.error('Error saving filter analytics:', error);
  }
};

// Get analytics data
export const getAnalytics = () => {
  try {
    // Load from localStorage
    const searchData = localStorage.getItem('portfolio_search_analytics');
    const filterData = localStorage.getItem('portfolio_filter_analytics');
    
    if (searchData) {
      const parsed = JSON.parse(searchData);
      analytics.searches = parsed.searches;
      analytics.popularSearches = new Map(parsed.popularSearches);
    }
    
    if (filterData) {
      const parsed = JSON.parse(filterData);
      analytics.filters = parsed.filters;
      analytics.popularFilters = new Map(parsed.popularFilters);
    }
    
    return {
      searches: analytics.searches,
      filters: analytics.filters,
      popularSearches: Array.from(analytics.popularSearches.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10),
      popularFilters: Array.from(analytics.popularFilters.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
    };
  } catch (error) {
    console.error('Error loading analytics:', error);
    return null;
  }
}; 