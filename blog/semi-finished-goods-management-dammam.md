---
title: Semi-Finished Goods Management for Dammam Manufacturers with ERPNext
layout: blogs.njk
posted: 2022-02-14
tags: blog
time: 6 min
image: /assets/img/erpnext-hero-compressed.png
intro: Between raw materials and finished products lies work-in-progress. ERPNext helps Dammam's industrial sector manage semi-finished goods for efficient multi-stage production.
---

A complex product doesn't go from raw material to finished good in one step. There are intermediate stages - sub-assemblies, half-finished components, work-in-progress that represents value created but not yet complete.

Managing these semi-finished goods effectively is crucial for manufacturers in Dammam's industrial sectors, from petrochemical equipment to consumer products.

## What Are Semi-Finished Goods?

Semi-finished goods occupy the middle ground:

**Not Raw Materials**
- Value has been added
- Processing has occurred
- No longer original form

**Not Finished Goods**
- More work required
- Not ready for sale
- Intermediate stage

**Examples**
- Machined components awaiting assembly
- Painted parts before final assembly
- Sub-assemblies used in multiple products
- Work-in-progress on the production floor

## Why Semi-Finished Goods Matter

### Production Flexibility

Build ahead when you can:

- Create sub-assemblies in advance
- Respond faster to orders
- Smooth production flow
- Balance capacity utilization

### Inventory Value

Significant investment:

- Raw material cost included
- Processing cost added
- Working capital tied up
- Accurate valuation needed

### Planning Complexity

More items to track:

- Raw materials + semi-finished + finished
- Multi-level planning
- Inventory management at each level
- Lead time considerations

## ERPNext Semi-Finished Goods

ERPNext handles multi-stage production seamlessly.

### Multi-Level BOMs

Structure products properly:

```
Finished Product
├── Semi-Finished Component A (make to stock)
│   ├── Raw Material 1
│   └── Raw Material 2
├── Semi-Finished Component B (make to stock)
│   ├── Raw Material 3
│   └── Purchased Part 1
└── Purchased Assembly C
```

Semi-finished items have their own BOMs and become components in higher-level BOMs.

### Separate Work Orders

Each level gets its own work order:

**Level 1 Work Orders**
- Produce semi-finished components
- Consume raw materials
- Add to semi-finished inventory

**Level 2 Work Orders**
- Produce finished products
- Consume semi-finished goods
- Add to finished goods inventory

### Planning Cascade

Production planning flows down:

1. Demand for finished goods
2. Explode to semi-finished requirements
3. Net against semi-finished inventory
4. Generate work orders at each level

## Dammam Manufacturing Applications

### Industrial Equipment

Complex machinery production:

- Fabricated frames (semi-finished)
- Machined components (semi-finished)
- Assembled modules (semi-finished)
- Complete machines (finished)

Each stage tracked and valued separately.

### Petrochemical Supply

Components for the oil and gas sector:

- Raw steel to machined blanks
- Blanks to heat-treated parts
- Parts to tested assemblies
- Assemblies to certified products

Quality gates at each stage.

### Consumer Products

Multi-stage consumer manufacturing:

- Plastic molded components
- Electronic sub-assemblies
- Packaged modules
- Finished products

Fast-moving inventory requires tight control.

## Inventory Management

Track semi-finished goods properly:

### Separate Warehouses

Organize by stage:

- Raw material warehouse
- WIP/semi-finished warehouse
- Finished goods warehouse

Clear separation aids control.

### Valuation

Accurate costing:

- Material costs accumulated
- Processing costs added
- Current value known
- Financial reporting accurate

### Reorder Management

Maintain appropriate levels:

- Reorder points for key semi-finished
- Safety stock for critical components
- Balance against holding costs

## Production Strategies

### Make-to-Stock Semi-Finished

Build intermediate inventory:

**Advantages**
- Faster final assembly
- Better capacity utilization
- Flexibility for variations

**Disadvantages**
- Inventory investment
- Obsolescence risk
- Storage requirements

### Make-to-Order Throughout

Pull system:

**Advantages**
- Minimal inventory
- No obsolescence
- Lower working capital

**Disadvantages**
- Longer lead times
- Less flexibility
- Capacity pressure

### Hybrid Approach

Strategic inventory:

- Stock high-volume, stable items
- Make to order for variations
- Balance investment and service

## Quality at Each Stage

Quality gates matter:

### Stage Inspection

Inspect before progression:

- Don't pass defects forward
- Catch issues early
- Document results
- Track by batch/lot

### Traceability

Link stages together:

- Which raw materials in which semi-finished?
- Which semi-finished in which finished?
- Complete genealogy
- Recall capability

## Costing Considerations

Accurate cost tracking:

### Cost Accumulation

As work progresses:

- Raw material costs
- Operation costs added
- Overhead allocated
- Cumulative cost calculated

### Standard vs. Actual

Compare costs:

- Standard cost per BOM
- Actual cost per work order
- Variance analysis
- Improvement identification

### Inventory Valuation

Financial accuracy:

- WIP valued correctly
- Semi-finished valued correctly
- Balance sheet accuracy
- COGS accuracy

## Integration Benefits

Semi-finished goods connect systems:

### Planning

- Multi-level MRP
- Cascading requirements
- Capacity at each level

### Production

- Work orders per level
- Material flow control
- Progress tracking

### Inventory

- Multi-location tracking
- Valuation by stage
- Movement recording

### Finance

- WIP accounting
- Cost analysis
- Margin visibility

## Best Practices

### Clear Definition

Define what's semi-finished:

- Distinct item codes
- Separate from raw materials
- Identified in BOM structure

### Appropriate Stocking

Stock strategically:

- Analyze demand patterns
- Consider lead times
- Balance investment vs. service

### Quality Control

Inspect at stage completion:

- Don't pass defects
- Document results
- Traceability maintained

### Regular Review

Optimize over time:

- Review inventory levels
- Analyze slow-movers
- Adjust policies

## The Manufacturing Flow

For Dammam's manufacturers, semi-finished goods are part of the production reality. Managing them well means:

- Faster response to customers
- Better capacity utilization
- Accurate costing and valuation
- Quality control at each stage

ERPNext provides the multi-level capabilities. Your production strategy makes them valuable.

Manage the middle. Master your manufacturing.
