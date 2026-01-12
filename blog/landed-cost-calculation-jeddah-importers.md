---
title: Accurate Landed Cost Calculation for Jeddah Importers Using ERPNext
layout: blogs.njk
posted: 2023-01-24
tags: blog
time: 7 min
image: /assets/img/erpnext-hero-compressed.png
intro: Jeddah's importers know that the purchase price is just the beginning. From Islamic Port to your warehouse, numerous costs add up. ERPNext helps you capture true landed costs for accurate pricing and profitability.
---

The container arrives at Jeddah Islamic Port. The goods cost $50,000 FOB from your Chinese supplier. But what's the true cost by the time products reach your warehouse?

Freight charges. Customs duties. Port handling. Clearing agent fees. Transportation. Insurance. Storage. The list goes on.

If you're pricing products based only on purchase price, you're likely selling at lower margins than you think - or worse, at a loss.

## What Is Landed Cost?

Landed cost is the complete cost of getting goods from supplier to your warehouse, ready for sale. It includes:

**Direct Costs**
- Product purchase price
- International freight
- Insurance
- Customs duties and taxes

**Indirect Costs**
- Port charges
- Clearing agent fees
- Inland transportation
- Handling and storage
- Inspection fees
- Documentation costs

Only when you know the true landed cost can you price products correctly and measure real profitability.

## The Jeddah Importer Challenge

Importers operating through Jeddah face specific complexities:

### Multiple Cost Sources

Costs come from many parties:

- Supplier invoice in foreign currency
- Freight forwarder billing in USD
- Customs authority in Saudi Riyals
- Clearing agent with various line items
- Transporter for inland delivery

Bringing these together manually is time-consuming and error-prone.

### Allocation Questions

When a container holds 50 different products, how do you allocate shared costs?

- By value (higher-priced items bear more)
- By quantity (more units, more cost share)
- By weight (heavier items cost more to ship)
- By volume (space consumed)

Different costs may need different allocation methods.

### Timing Issues

Costs arrive at different times:

- Purchase invoice comes first
- Freight billing after shipment
- Customs charges during clearance
- Some fees appear weeks later

Yet you need accurate product costs for pricing and sales.

## ERPNext Landed Cost Voucher

ERPNext provides a systematic approach to landed cost calculation.

### Link to Purchase Receipts

When goods arrive:

1. Create purchase receipt for the goods
2. Initial inventory value at purchase price
3. Create landed cost voucher
4. Link to the purchase receipt

### Add Additional Costs

Add every cost component:

- Create accounts for each cost type
- Enter actual charges from invoices
- Specify allocation basis for each
- System calculates item-level allocation

### Automatic Recalculation

ERPNext recalculates:

- Updated unit cost for each item
- Adjusted inventory valuation
- Corrected cost of goods sold
- Accurate gross margin reporting

### Flexible Allocation

Choose appropriate basis for each cost:

**Freight**: Allocate by weight or volume
**Duties**: Allocate by value or as specified
**Handling**: Allocate by quantity
**Insurance**: Allocate by value

Multiple methods within the same shipment.

## Practical Example

A Jeddah importer receives a container with:

| Item | Qty | Unit Price | Total Value |
|------|-----|------------|-------------|
| Item A | 1000 | $5 | $5,000 |
| Item B | 500 | $20 | $10,000 |
| Item C | 200 | $175 | $35,000 |

**Total Purchase Value**: $50,000

**Additional Costs**:
- Freight: $3,000 (allocate by weight)
- Customs Duty: $7,500 (allocate by value)
- Clearing Fees: $500 (allocate by quantity)
- Transport: $800 (allocate by volume)

ERPNext calculates landed cost per item considering all factors and allocation methods.

## Currency Handling

International trade involves multiple currencies. ERPNext manages:

### Purchase Currency

Record supplier invoice in original currency with exchange rate.

### Cost Currencies

Each additional cost can be in its own currency:

- Freight in USD
- Customs in SAR
- Other fees as invoiced

### Base Currency Conversion

All amounts convert to Saudi Riyals for inventory valuation.

## Integration with Business Processes

Landed costing connects throughout ERPNext:

### Inventory Valuation

Stock value reflects true landed cost, not just purchase price.

### Profitability Analysis

Gross margin calculations use accurate costs.

### Pricing Decisions

Set selling prices based on real costs, not estimates.

### Supplier Comparison

Compare suppliers including all costs, not just unit price.

## Best Practices for Jeddah Importers

### Standardize Cost Categories

Create consistent expense accounts for landed costs:

- Ocean Freight
- Air Freight
- Customs Duties
- Port Charges
- Clearing Fees
- Inland Transport
- Insurance
- Inspection Fees

### Document Allocation Rationale

Record why you chose each allocation method. Auditors appreciate the logic.

### Timely Processing

Create landed cost vouchers promptly. Delayed cost capture means inaccurate interim reporting.

### Regular Review

Analyze landed costs by shipment, supplier, and origin country. Identify opportunities for cost reduction.

## The Competitive Advantage

Jeddah's trading sector is competitive. Importers who understand their true costs:

- Price products correctly
- Avoid margin erosion
- Identify profitable product lines
- Negotiate better with suppliers
- Compete more effectively

Those who guess at costs often wonder where profits went.

## Beyond Jeddah

While this focuses on Jeddah's import sector, the same principles apply across Saudi Arabia:

- Dammam's Eastern Province importers
- Riyadh's distribution companies
- Regional traders everywhere

ERPNext provides the landed cost foundation for professional import operations throughout the Kingdom and across the GCC.

Know your costs. Control your margins. Grow your business.
