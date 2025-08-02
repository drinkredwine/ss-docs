# Data Explorer

The Data Explorer provides a flexible, interactive interface for analyzing your user acquisition data across multiple dimensions and metrics. This tool allows you to create custom breakdowns and dive deep into specific segments of your data.

## Overview

Data Explorer is designed for ad-hoc analysis and custom reporting. Unlike fixed reports, it allows you to dynamically select dimensions, metrics, and filters to create personalized views of your data. This is ideal for answering specific business questions and conducting exploratory data analysis.

## Filter Configuration

### Date and Attribution
- **Date Range**: Select the analysis period (May 2, 2025 - Aug 1, 2025 in example)
- **Attribution**: Configure attribution settings (paid attribution shown)

### Campaign Targeting
- **Platform**: Filter by iOS, Android, or both
- **Media Source**: Choose specific advertising channels
- **Campaign Type**: Filter by campaign categorization
- **Campaign Name**: Select specific campaigns
- **Adset Name**: Focus on particular ad sets
- **Ad Name**: Analyze individual ads
- **Country**: Geographic filtering
- **UA Team**: Filter by user acquisition teams

## Key Metrics Summary

The top metrics bar displays aggregated performance for your selected filters:

- **Spend**: Total acquisition investment ($128,896)
- **Total Net Revenue**: Revenue generated ($80,200)
- **ROAS D1**: Day 1 Return on Ad Spend (13%)
- **ROAS D3**: Day 3 Return on Ad Spend (22%)
- **Complete Cohort**: Number of complete cohorts analyzed (30)
- **Avg Cohort**: Average cohort performance (36)

## Breakdown Analysis

### Breakdown by Chosen Dimension

**Purpose**: Create custom data breakdowns by any available dimension

**Current Example**: Breakdown by "Media source"

**Table Structure**:
- **Dimension Column**: The selected breakdown dimension (Media source)
- **First Cohort**: Earliest cohort date for each dimension value
- **Last Cohort**: Most recent cohort date for each dimension value
- **Avg Cohort**: Average cohort performance metric
- **Spend**: Total spend per dimension value
- **Total Net Revenue**: Revenue generated per dimension value
- **Revenue to Cohort (est.)**: Estimated revenue attribution to cohorts
- **Revenue to Cohort (actual)**: Actual revenue attribution to cohorts
- **Revenue Progress**: Revenue progression indicator

**Media Source Performance Examples**:
- **Facebook**: May 2-Jul 31, 2025 | 45 avg cohort | $53,931 spend | $46,439 revenue
- **Ironsource**: May 2-Jul 31, 2025 | 48 avg cohort | $38,265 spend | $20,346 revenue  
- **Applovin**: Jun 7-Jul 31, 2025 | 17 avg cohort | $20,685 spend | $4,577 revenue
- **TikTok Ads**: May 2-Jul 31, 2025 | 53 avg cohort | $8,136 spend | $2,724 revenue
- **Google Ads**: May 2-Jul 21, 2025 | 53 avg cohort | $7,875 spend | $3,464 revenue

**Dimension Selector**: Choose from available dimensions for breakdown analysis

**Optional Metrics**: 
- Add or remove metrics displayed in the table
- Customize the view based on analysis needs
- Note: "Changes are temporary" - configurations don't persist

## Key Features

### 1. Dynamic Dimension Selection
- Choose any available dimension for breakdown analysis
- Switch between different breakdown views instantly
- Compare performance across different categorizations

### 2. Flexible Metric Display
- Add or remove metrics from the table view
- Focus on the metrics most relevant to your analysis
- Temporary configurations allow for quick experimentation

### 3. Cohort Analysis Integration
- First and last cohort dates show the time span of data
- Average cohort metrics provide performance benchmarks
- Complete vs. incomplete cohort tracking

### 4. Revenue Attribution Tracking
- Estimated vs. actual revenue attribution
- Revenue progress indicators
- Cohort-level revenue analysis

## How to Use Data Explorer

### 1. Define Your Analysis Question
- What dimension do you want to analyze? (Media source, Campaign, Country, etc.)
- Which metrics are most important for your analysis?
- What time period and filters are relevant?

### 2. Configure Filters
- Set appropriate date ranges
- Apply relevant platform, country, or team filters
- Select specific campaigns or media sources if needed

### 3. Select Breakdown Dimension
- Choose the dimension that answers your business question
- Consider the level of granularity needed for your analysis

### 4. Customize Metrics
- Add metrics relevant to your analysis objectives
- Remove metrics that aren't needed to focus the view
- Remember that changes are temporary

### 5. Analyze Results
- Look for patterns in performance across dimension values
- Identify top and bottom performers
- Note cohort date ranges for context

## Common Analysis Scenarios

### 1. Media Source Performance Analysis
- **Question**: Which media sources provide the best ROAS?
- **Setup**: Breakdown by Media source, focus on ROAS and spend metrics
- **Insights**: Compare efficiency and scale across channels

### 2. Geographic Performance Review
- **Question**: Which countries deliver the highest LTV users?
- **Setup**: Breakdown by Country, analyze revenue metrics
- **Insights**: Identify high-value geographic markets

### 3. Campaign Effectiveness Study
- **Question**: Which campaigns are most cost-effective?
- **Setup**: Breakdown by Campaign name, compare CPI and ROAS
- **Insights**: Optimize campaign mix and budget allocation

### 4. Creative Performance Analysis
- **Question**: Which ad creatives drive the best results?
- **Setup**: Breakdown by Ad name, analyze conversion and revenue
- **Insights**: Scale winning creatives and pause underperformers

### 5. Team Performance Comparison
- **Question**: How do different UA teams perform?
- **Setup**: Breakdown by UA team, compare all key metrics
- **Insights**: Share best practices and optimize team strategies

## Advanced Analysis Tips

### 1. Sequential Analysis
- Start with high-level breakdowns (Media source)
- Drill down into specific segments (Campaign → Adset → Ad)
- Build understanding progressively

### 2. Comparative Studies
- Use consistent date ranges when comparing dimensions
- Apply same filters across different breakdowns
- Focus on statistically significant differences

### 3. Cohort Context
- Pay attention to first/last cohort dates
- Consider cohort maturity when comparing metrics
- Use average cohort metrics for normalization

### 4. Performance Benchmarking
- Identify top performers in each dimension
- Use these as benchmarks for optimization
- Look for patterns in high-performing segments

### 5. Cross-Reference Analysis
- Compare Data Explorer findings with other reports
- Validate insights using UA Summary and Cohorts Performance
- Use Success Criteria Report for benchmark comparisons

## Limitations and Considerations

- **Temporary Configurations**: Metric selections don't persist between sessions
- **Cohort Completeness**: Recent cohorts may have incomplete data
- **Attribution Windows**: Results depend on selected attribution settings
- **Sample Sizes**: Small segments may have less reliable metrics

The Data Explorer empowers you to conduct flexible, custom analysis of your user acquisition data, enabling data-driven decisions based on your specific business questions and analytical needs.