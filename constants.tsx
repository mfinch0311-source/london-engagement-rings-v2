
import { LocationData, Supplier } from './types';

// Helper to generate IDs
const createId = (slug: string, rank: number) => `${slug}-${rank}`;

export const LOCATIONS: LocationData[] = [
  {
    name: 'Mayfair',
    slug: 'mayfair',
    description: 'The global heart of high jewellery. A discreet enclave where heritage meets the world\'s most exceptional artisans.',
    metaTitle: 'Mayfair Engagement Ring Suppliers | Luxury Engagement Rings in London',
    metaDesc: 'A considered guide to navigating engagement ring suppliers in Mayfair. We offer discreet, expert advice for first-time buyers seeking exceptional craftsmanship.',
    imageUrl: 'https://images.unsplash.com/photo-1554110397-9bac083977c6?auto=format&fit=crop&q=80&w=1200',
    suppliers: [
      { 
        id: 'mayfair-1', 
        rank: 1, 
        name: 'Boodles', 
        address: '178 New Bond Street, London W1S 4RF', 
        googleRating: 4.5, 
        description: 'Boodles is one of Britain’s most established luxury jewellers, known for exceptional craftsmanship, discreet service, and high-quality diamonds. The Mayfair boutique specialises in bespoke engagement rings and private consultations.',
        whyWeLikeIt: 'We like the way Boodles maintains a sense of heritage without feeling intimidating; it’s an ideal starting point for anyone navigating Bond Street for the first time.'
      },
      { id: 'mayfair-2', rank: 2, name: 'Jessica McCormack', address: 'Carlos Place, London W1K 2AL', googleRating: 4.4, description: 'Jessica McCormack is known for distinctive, handcrafted engagement rings that blend antique inspiration with modern design. Operating from a private Mayfair townhouse, the experience feels intimate and appointment-led.' },
      { id: 'mayfair-3', rank: 3, name: 'Bentley & Skinner', address: '55 Piccadilly, London W1J 9EJ', googleRating: 4.3, trustpilotRating: 4.3, description: 'Bentley & Skinner is a heritage jeweller with a Royal Warrant, specialising in antique and bespoke engagement rings. Buyers value the depth of expertise and transparency around stones.' },
      { id: 'mayfair-4', rank: 4, name: 'Tiffany & Co.', address: '25 Old Bond Street, London W1S 4QB', googleRating: 4.4, trustpilotRating: 4.2, description: 'Tiffany & Co. is globally recognised for its classic engagement ring designs and consistent diamond quality. The Bond Street flagship offers a polished luxury experience.' },
      { id: 'mayfair-5', rank: 5, name: 'Pragnell', address: '14 Mount Street, London W1K 2HE', googleRating: 4.6, description: 'Pragnell is a sixth-generation British jeweller with a strong reputation for rare diamonds and bespoke craftsmanship. Customers mention the unpressured service and high level of expertise.' }
    ]
  },
  {
    name: 'Marylebone',
    slug: 'marylebone',
    description: 'A refined blend of independent boutiques and contemporary workshops, offering a more intimate buying experience.',
    metaTitle: 'Marylebone Engagement Ring Suppliers | Luxury Engagement Rings in London',
    metaDesc: 'Discover engagement ring suppliers in Marylebone with our independent guide. A measured perspective for men navigating the complexities of their first major jewellery purchase.',
    imageUrl: 'https://images.unsplash.com/photo-1522881197257-40f040627670?auto=format&fit=crop&q=80&w=1200',
    suppliers: [
      { 
        id: 'marylebone-1', 
        rank: 1, 
        name: 'New Cavendish Jewellers', 
        address: '33 New Cavendish Street, London W1G 0JH', 
        googleRating: 4.7, 
        trustpilotRating: 4.7, 
        description: 'New Cavendish Jewellers is a long-established, family-run jeweller known for exceptional customer service and bespoke engagement rings. Reviews consistently reference trust and transparency.',
        whyWeLikeIt: 'We’ve found their family-run approach creates a genuine level of trust that’s hard to replicate in larger, more transactional showrooms.'
      },
      { id: 'marylebone-2', rank: 2, name: 'Ingle & Rhode', address: '14 Gees Court, London W1U 8HP', googleRating: 4.9, trustpilotRating: 4.9, description: 'Ingle & Rhode specialises in ethical engagement rings using Fairtrade gold and responsibly sourced diamonds. Popular with couples prioritising sustainability.' },
      { id: 'marylebone-3', rank: 3, name: 'Lark & Berry', address: '14a George Street, London W1U 3QJ', googleRating: 4.7, trustpilotRating: 4.7, description: 'Lark & Berry is known for modern engagement rings featuring lab-grown diamonds. Customers highlight the contemporary designs and transparent approach to pricing.' },
      { id: 'marylebone-4', rank: 4, name: 'Cox & Power', address: '4 Chiltern Street, London W1U 7PT', googleRating: 4.6, description: 'Cox & Power is an artisan jeweller specialising in Fairmined gold and distinctive, handcrafted engagement rings. Buyers value the originality of the designs.' },
      { id: 'marylebone-5', rank: 5, name: 'Steven Stone', address: '77-78 St Christopher’s Place, London W1U 1PU', googleRating: 4.3, trustpilotRating: 4.3, description: 'Steven Stone offers a wide range of diamond engagement rings alongside bespoke services. Reviews often mention competitive pricing and clear advice.' }
    ]
  },
  {
    name: 'Belgravia',
    slug: 'belgravia',
    description: 'Understated elegance and private studio experiences for those who value absolute discretion.',
    metaTitle: 'Belgravia Engagement Ring Suppliers | Luxury Engagement Rings in London',
    metaDesc: 'An understated guide to the private ateliers and engagement ring suppliers in Belgravia. We provide clarity and reassurance for a considered buying journey.',
    imageUrl: 'https://images.unsplash.com/photo-1636113278553-62c0b02f4315?auto=format&fit=crop&q=80&w=1200',
    suppliers: [
      { 
        id: 'belgravia-1', 
        rank: 1, 
        name: 'Elizabeth Gage', 
        address: '14 West Halkin Street, London SW1X 8JL', 
        googleRating: 4.6, 
        description: 'Elizabeth Gage is known for bold, highly distinctive engagement rings that prioritise craftsmanship and individuality. Buyers value the depth of expertise and strong artistic identity.',
        whyWeLikeIt: 'We appreciate the absolute dedication to individual character here; it’s a refreshing alternative for those who want to avoid the standard retail path.'
      },
      { id: 'belgravia-2', rank: 2, name: 'Catherine Best', address: '73 Elizabeth Street, London SW1W 9PJ', googleRating: 4.5, description: 'Catherine Best specialises in bespoke engagement rings using rare and unusual gemstones. Customers frequently highlight the creativity and highly personal service.' },
      { id: 'belgravia-3', rank: 3, name: 'David Thomas', address: '2 Bourne Street, London SW1W 8JA', googleRating: 4.7, description: 'David Thomas creates handcrafted engagement rings entirely on-site, offering a transparent and highly personal design process. Each ring is made start to finish by the same jeweller.' },
      { id: 'belgravia-4', rank: 4, name: 'Ramesh Jewellers', address: '3 Ebury Bridge Road, London SW1W 8DX', googleRating: 4.6, description: 'Ramesh Jewellers is well regarded for intricate gold and diamond engagement rings. Reviews frequently mention patience, expertise, and excellent customer service.' },
      { id: 'belgravia-5', rank: 5, name: 'Patrick Mavros', address: '58 Motcomb Street, London SW1X 8TF', googleRating: 4.5, description: 'Patrick Mavros offers distinctive engagement rings inspired by nature and fine sculpture. Customers value the originality of the designs and attentive service.' }
    ]
  },
  {
    name: 'Knightsbridge',
    slug: 'knightsbridge',
    description: 'Home to the world\'s most famous diamond houses and iconic luxury landmarks.',
    metaTitle: 'Knightsbridge Engagement Ring Suppliers | Luxury Engagement Rings in London',
    metaDesc: 'Navigate the prestigious engagement ring suppliers in Knightsbridge with confidence. Our editorial guide offers practical, trust-led advice for the discerning buyer.',
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1200',
    suppliers: [
      { 
        id: 'knightsbridge-1', 
        rank: 1, 
        name: 'Boodles', 
        address: '30 Sloane Street, London SW1X 9QD', 
        googleRating: 4.5, 
        description: 'The Knightsbridge Boodles boutique offers the same high standard of bespoke service and craftsmanship. Buyers highlight private consultations and expert guidance.',
        whyWeLikeIt: 'The consistency of their service across London is why we trust them; they understand the need for clarity and reassurance in a high-stakes purchase.'
      },
      { id: 'knightsbridge-2', rank: 2, name: 'Graff', address: '32-34 Brompton Road, London SW3 1ES', googleRating: 4.7, description: 'Graff is internationally recognised for handling some of the world’s most exceptional diamonds. Customers value the discreet service and unrivalled diamond quality.' },
      { id: 'knightsbridge-3', rank: 3, name: 'Cartier', address: '39 Sloane Street, London SW1X 9LP', googleRating: 4.4, trustpilotRating: 4.3, description: 'Cartier offers classic engagement ring designs with strong brand heritage. Buyers are drawn to the timeless aesthetics and global recognition.' },
      { id: 'knightsbridge-4', rank: 4, name: 'Chopard', address: '14 New Bond Street, London W1S 3SX', googleRating: 4.5, description: 'Chopard combines Swiss craftsmanship with ethical sourcing commitments. Customers appreciate the blend of distinctive design and sustainability credentials.' },
      { id: 'knightsbridge-5', rank: 5, name: 'Harrods Fine Jewellery', address: '87-135 Brompton Road, London SW1X 7XL', googleRating: 4.6, description: 'Harrods offers access to multiple high-end jewellery brands under one roof. Reviews mention knowledgeable staff and a relaxed browsing experience.' }
    ]
  },
  {
    name: 'Chelsea',
    slug: 'chelsea',
    description: 'Artistic heritage meets modern luxury in one of London\'s most stylish boroughs.',
    metaTitle: 'Chelsea Engagement Ring Suppliers | Luxury Engagement Rings in London',
    metaDesc: 'A practical and calm exploration of engagement ring suppliers in Chelsea. Designed to help men find the right artisan with absolute technical clarity.',
    imageUrl: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&q=80&w=1200',
    suppliers: [
      { 
        id: 'chelsea-1', 
        rank: 1, 
        name: 'Theo Fennell', 
        address: '198-199 Fulham Road, London SW10 9PJ', 
        googleRating: 4.5, 
        description: 'Theo Fennell is known for imaginative, handcrafted engagement rings with strong character and individuality. Buyers value the in-house workshop and bespoke capability.',
        whyWeLikeIt: 'We admire the creative independence of this studio; the direct access to the workshop provides a level of technical reassurance we find invaluable.'
      },
      { id: 'chelsea-2', rank: 2, name: 'Robinson Pelham', address: '6 Elystan Street, London SW3 3NT', googleRating: 4.6, description: 'Robinson Pelham offers contemporary engagement ring designs with a strong British identity. Customers highlight the modern aesthetic and quality craftsmanship.' },
      { id: 'chelsea-3', rank: 3, name: 'Kiki McDonough', address: '15 Symons Street, London SW3 3TG', googleRating: 4.7, description: 'Kiki McDonough is recognised for colourful gemstone engagement rings and refined design. Buyers appreciate the balance of elegance and individuality.' },
      { id: 'chelsea-4', rank: 4, name: 'Chelsea Bijouterie', address: 'By appointment, Chelsea', googleRating: 4.8, description: 'Chelsea Bijouterie specialises in antique and vintage engagement rings. Customers value the depth of knowledge and transparency around provenance.' },
      { id: 'chelsea-5', rank: 5, name: 'Butler & Wilson', address: '192 Fulham Road, London SW10 9PJ', googleRating: 4.4, description: 'Butler & Wilson offers distinctive, statement-style rings. Reviews mention friendly service and a broad range of bold design options.' }
    ]
  },
  {
    name: 'Kensington',
    slug: 'kensington',
    description: 'Timeless luxury and established jewellers with a reputation for impeccable service.',
    metaTitle: 'Kensington Engagement Ring Suppliers | Luxury Engagement Rings in London',
    metaDesc: 'Our curated view on engagement ring suppliers in Kensington. We focus on heritage and trust to ensure a stress-free experience for first-time buyers.',
    imageUrl: 'https://images.unsplash.com/photo-1590429711674-6725f19ccf21?auto=format&fit=crop&q=80&w=1200',
    suppliers: [
      { 
        id: 'kensington-1', 
        rank: 1, 
        name: 'Russo Fine Jewels', 
        address: '154 Kensington Church Street, London W8 4BN', 
        googleRating: 4.6, 
        description: 'Russo Fine Jewels is known for elegant engagement rings crafted with high-quality gemstones and precious metals. Buyers appreciate the personalised service and refined designs.',
        whyWeLikeIt: 'We’ve found their refined and quiet approach perfectly suits the Kensington atmosphere, offering a very personal path to a bespoke piece.'
      },
      { id: 'kensington-2', rank: 2, name: 'Barbara Harris Water Jewels', address: '14 St Albans Grove, London W8 5PN', googleRating: 4.7, description: 'Barbara Harris Water Jewels offers bespoke engagement rings created in an on-site studio. Customers value the artistic approach and gemstone selection.' },
      { id: 'kensington-3', rank: 3, name: 'Henry Hallpike', address: '2 Kensington High Street, London W8 4PT', googleRating: 4.8, description: 'Henry Hallpike is a traditional family jeweller with a strong reputation for antique and classic engagement rings. Buyers praise honesty and expertise.' },
      { id: 'kensington-4', rank: 4, name: 'Pomegranate Jewellery', address: 'Kensington Square, London W8', googleRating: 4.9, description: 'Pomegranate Jewellery offers colourful gemstone engagement rings and bespoke designs. Customers highlight originality and craftsmanship.' },
      { id: 'kensington-5', rank: 5, name: 'Otiumberg', address: '74 Portland Road, London W11 4HX', googleRating: 4.7, description: 'Otiumberg is known for modern, minimal engagement rings and ethical sourcing. Buyers value clean design and a relaxed showroom experience.' }
    ]
  },
  {
    name: 'Notting Hill',
    slug: 'notting-hill',
    description: 'Creative and artisanal designs for those looking for something truly unique.',
    metaTitle: 'Notting Hill Engagement Ring Suppliers | Luxury Engagement Rings in London',
    metaDesc: 'Explore the artisanal engagement ring suppliers in Notting Hill. A discreet, peer-informed guide for men seeking unique craftsmanship without the pressure.',
    imageUrl: 'https://images.unsplash.com/photo-1512470876302-972fad2aa9dd?auto=format&fit=crop&q=80&w=1200',
    suppliers: [
      { 
        id: 'notting-hill-1', 
        rank: 1, 
        name: 'Solange Azagury-Partridge', 
        address: 'Westbourne Grove, London W11', 
        googleRating: 4.6, 
        description: 'Solange Azagury-Partridge is known for unconventional, design-led engagement rings that prioritise individuality. Buyers value the originality and artistic reputation.',
        whyWeLikeIt: 'We like this choice for its bold refusal to follow the crowd; it’s the place we recommend for someone looking for a truly unique perspective.'
      },
      { id: 'notting-hill-2', rank: 2, name: 'Dinny Hall', address: '127 Westbourne Grove, London W11 2RS', googleRating: 4.5, description: 'Dinny Hall offers refined, wearable engagement rings with a modern British aesthetic. Customers appreciate the balance of simplicity and craftsmanship.' },
      { id: 'notting-hill-3', rank: 3, name: 'Malcolm Betts', address: '22 Ledbury Road, London W11 2AB', googleRating: 4.8, description: 'Malcolm Betts specialises in handcrafted engagement rings using antique diamonds and distinctive gold finishes. Buyers value the uniqueness of each ring.' },
      { id: 'notting-hill-4', rank: 4, name: 'Portobello Road Antiques', address: 'Portobello Road, London W11', googleRating: 4.6, description: 'Portobello Road’s antique jewellery dealers offer a wide selection of vintage engagement rings. Buyers value the ability to compare styles and periods.' },
      { id: 'notting-hill-5', rank: 5, name: 'Kirsten Goss', address: 'Holland Street, London W8', googleRating: 4.5, description: 'Kirsten Goss is known for contemporary engagement rings featuring unusual gemstones. Customers value the craftsmanship and distinctive design language.' }
    ]
  },
  {
    name: 'Holland Park',
    slug: 'holland-park',
    description: 'Quiet, exclusive luxury for a personal and considered selection process.',
    metaTitle: 'Holland Park Engagement Ring Suppliers | Luxury Engagement Rings in London',
    metaDesc: 'A refined editorial guide to engagement ring suppliers in Holland Park. We offer the technical clarity needed to make a considered and confident choice.',
    imageUrl: 'https://images.unsplash.com/photo-1560241074-b81607590d96?auto=format&fit=crop&q=80&w=1200',
    suppliers: [
      { 
        id: 'holland-park-1', 
        rank: 1, 
        name: 'Otiumberg', 
        address: '74 Portland Road, London W11 4HX', 
        googleRating: 4.7, 
        description: 'Otiumberg’s flagship boutique offers minimalist engagement rings with ethical sourcing. Buyers appreciate the calm environment and modern design sensibility.',
        whyWeLikeIt: 'The minimalist clarity of their designs is matched by a calm showroom experience that we find particularly reassuring for first-time buyers.'
      },
      { id: 'holland-park-2', rank: 2, name: 'Andy Rowan Jewellery', address: 'Holland Park, London', googleRating: 4.6, description: 'Andy Rowan specialises in bespoke engagement rings using repurposed antique stones. Customers value the sustainable approach and personal design process.' },
      { id: 'holland-park-3', rank: 3, name: 'The Cross', address: '74 Portland Road, London W11 4HX', googleRating: 4.5, description: 'The Cross stocks a curated selection of contemporary jewellery designers. Buyers value access to distinctive modern engagement ring styles.' },
      { id: 'holland-park-4', rank: 4, name: 'Astrid & Miyu', address: 'Notting Hill Gate, London W11', googleRating: 4.4, trustpilotRating: 4.3, description: 'Astrid & Miyu offers accessible engagement-style rings with a modern aesthetic. Buyers appreciate the relaxed experience.' },
      { id: 'holland-park-5', rank: 5, name: 'Dinny Hall', address: 'Westbourne Grove, London W11', googleRating: 4.5, description: 'Dinny Hall serves Holland Park buyers seeking refined, wearable engagement rings with strong craftsmanship credentials.' }
    ]
  },
  {
    name: 'St John’s Wood',
    slug: 'st-johns-wood',
    description: 'Discreet high luxury with a focus on long-term client relationships.',
    metaTitle: 'St John’s Wood Engagement Ring Suppliers | Luxury Engagement Rings in London',
    metaDesc: 'Discover local engagement ring suppliers in St John’s Wood through our independent guide. Understated, expert advice for a significant personal milestone.',
    imageUrl: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&q=80&w=1200',
    suppliers: [
      { 
        id: 'st-johns-wood-1', 
        rank: 1, 
        name: 'Gott Jewellery', 
        address: 'St John’s Wood High Street, London NW8', 
        googleRating: 4.7, 
        description: 'Gott Jewellery offers bespoke engagement rings with a strong focus on craftsmanship and remodelling heirloom pieces. Buyers value the personal service.',
        whyWeLikeIt: 'We value the local, community-focused feel here; it makes a significant decision feel much more grounded and manageable.'
      },
      { id: 'st-johns-wood-2', rank: 2, name: 'Beau Gems', address: 'Finchley Road, London NW3', googleRating: 5.0, trustpilotRating: 5.0, description: 'Beau Gems is known for bespoke engagement rings and exceptional customer service. Reviews reference transparency and craftsmanship.' },
      { id: 'st-johns-wood-3', rank: 3, name: 'Laurelle Antique Jewellery', address: 'By appointment, London', googleRating: 4.6, description: 'Laurelle Antique Jewellery specialises in antique engagement rings, offering private viewings and detailed provenance guidance.' },
      { id: 'st-johns-wood-4', rank: 4, name: 'West 2 Jewellers', address: 'Edgware Road, London W2', googleRating: 4.4, description: 'West 2 Jewellers offers diamond engagement rings with competitive pricing. Buyers appreciate the straightforward approach.' },
      { id: 'st-johns-wood-5', rank: 5, name: 'Mihaela Christou Jewellery', address: 'St John’s Wood, London', googleRating: 4.5, description: 'Mihaela Christou creates bespoke engagement rings with a creative, artisan-led approach. Buyers value originality.' }
    ]
  },
  {
    name: 'Hampstead',
    slug: 'hampstead',
    description: 'Classic design and timeless craftsmanship in a village-like atmosphere.',
    metaTitle: 'Hampstead Engagement Ring Suppliers | Luxury Engagement Rings in London',
    metaDesc: 'A measured perspective on engagement ring suppliers in Hampstead. Our guide provides the reassurance and technical benchmarks required to buy with confidence.',
    imageUrl: 'https://images.unsplash.com/photo-1558350315-8aa00e8e4590?auto=format&fit=crop&q=80&w=1200',
    suppliers: [
      { 
        id: 'hampstead-1', 
        rank: 1, 
        name: 'De Beers (Hampstead)', 
        address: 'Hampstead High Street, London NW3', 
        googleRating: 4.6, 
        trustpilotRating: 4.2, 
        description: 'De Beers offers classic engagement rings backed by strong diamond provenance credentials. Buyers value trust and heritage.',
        whyWeLikeIt: 'We respect the technical transparency and clear provenance they provide, which simplifies the process of choosing a stone significantly.'
      },
      { id: 'hampstead-2', rank: 2, name: 'Polly Wales', address: 'Hampstead, London NW3', googleRating: 4.7, description: 'Polly Wales creates distinctive engagement rings with embedded gemstones and textured finishes. Buyers value uniqueness.' },
      { id: 'hampstead-3', rank: 3, name: 'Harriet Kelsall', address: 'Hampstead, London NW3', googleRating: 4.8, description: 'Harriet Kelsall offers bespoke engagement rings with ethical sourcing. Customers value transparency and collaborative design.' },
      { id: 'hampstead-4', rank: 4, name: 'Sweet Pea Jewellery', address: 'Hampstead, London NW3', googleRating: 4.6, description: 'Sweet Pea Jewellery creates delicate, handcrafted engagement rings. Buyers appreciate understated elegance.' },
      { id: 'hampstead-5', rank: 5, name: 'Primrose Hill Jewellery', address: 'Hampstead, London', googleRating: 4.5, description: 'Primrose Hill Jewellery offers minimalist engagement rings with a contemporary aesthetic. Buyers value simplicity.' }
    ]
  },
  {
    name: 'Primrose Hill',
    slug: 'primrose-hill',
    description: 'Boutique experiences for a contemporary and considered approach.',
    metaTitle: 'Primrose Hill Engagement Ring Suppliers | Luxury Engagement Rings in London',
    metaDesc: 'A discreet guide to engagement ring suppliers in Primrose Hill. We filter the noise to reveal the masters of the craft for first-time male buyers.',
    imageUrl: 'https://images.unsplash.com/photo-1582236357494-b2959092496a?auto=format&fit=crop&q=80&w=1200',
    suppliers: [
      { 
        id: 'primrose-hill-1', 
        rank: 1, 
        name: 'Harriet Kelsall', 
        address: 'Regent’s Park Road, London NW1', 
        googleRating: 4.8, 
        description: 'Harriet Kelsall’s Primrose Hill studio focuses on bespoke engagement rings with ethical sourcing and collaborative design.',
        whyWeLikeIt: 'We recommend this studio for their collaborative nature; the transparency of the design process removes much of the anxiety from a bespoke commission.'
      },
      { id: 'primrose-hill-2', rank: 2, name: 'Sweet Pea Jewellery', address: 'Regent’s Park Road, London NW1', googleRating: 4.6, description: 'Sweet Pea Jewellery produces handcrafted engagement rings with refined simplicity and strong craftsmanship.' },
      { id: 'primrose-hill-3', rank: 3, name: 'Primrose Hill Collection', address: 'Primrose Hill, London NW1', googleRating: 4.5, description: 'The Primrose Hill Collection offers minimalist engagement rings made with recycled metals. Buyers value sustainability.' },
      { id: 'primrose-hill-4', rank: 4, name: 'Press', address: 'Erskine Road, London NW3', googleRating: 4.4, description: 'Press curates modern jewellery brands suitable for non-traditional engagement rings. Buyers appreciate the fashion-forward selection.' },
      { id: 'primrose-hill-5', rank: 5, name: 'Primrose Hill Jewellery', address: 'Primrose Hill, London NW1', googleRating: 4.5, description: 'Primrose Hill Jewellery provides contemporary engagement rings across a broad range of styles.' }
    ]
  },
  {
    name: 'Richmond',
    slug: 'richmond',
    description: 'Riverside luxury focused on heritage, service, and ethical sourcing.',
    metaTitle: 'Richmond Engagement Ring Suppliers | Luxury Engagement Rings in London',
    metaDesc: 'Navigate engagement ring suppliers in Richmond with our trust-led editorial guide. Practical advice focused on quality, value, and ethical craftsmanship.',
    imageUrl: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&q=80&w=1200',
    suppliers: [
      { 
        id: 'richmond-1', 
        rank: 1, 
        name: 'David’s Jewellers', 
        address: 'Paved Court, Richmond TW9', 
        googleRating: 4.7, 
        description: 'David’s Jewellers specialises in antique and vintage engagement rings. Buyers value expertise and long-standing reputation.',
        whyWeLikeIt: 'We appreciate the deep expertise in antique pieces found here; it provides a sense of continuity and trust that is essential for such a purchase.'
      },
      { id: 'richmond-2', rank: 2, name: 'Gregory & Co', address: 'Paved Court, Richmond TW9', googleRating: 4.6, description: 'Gregory & Co offers bespoke engagement rings with an on-site workshop. Customers value craftsmanship and local service.' },
      { id: 'richmond-3', rank: 3, name: 'Ramesh Jewellers', address: 'Heath Road, Richmond TW1', googleRating: 4.6, description: 'Ramesh Jewellers is known for intricate gold and diamond engagement rings with strong customer service.' },
      { id: 'richmond-4', rank: 4, name: 'Susan Clarke Jewellers', address: 'Paved Court, Richmond TW9', googleRating: 4.5, description: 'Susan Clarke Jewellers offers traditional engagement rings with personal service and bespoke options.' },
      { id: 'richmond-5', rank: 5, name: 'Monroe’s Jewellers', address: 'The Quadrant, Richmond TW9', googleRating: 4.4, description: 'Monroe’s Jewellers provides a broad range of engagement rings at accessible price points.' }
    ]
  },
  {
    name: 'Putney',
    slug: 'putney',
    description: 'Personal service and specialist bespoke creations for South West London.',
    metaTitle: 'Putney Engagement Ring Suppliers | Luxury Engagement Rings in London',
    metaDesc: 'A considered path to engagement ring suppliers in Putney. Our guide offers the clarity and technical insight needed for a stress-free buying process.',
    imageUrl: 'https://images.unsplash.com/photo-1515586060488-297d1351111d?auto=format&fit=crop&q=80&w=1200',
    suppliers: [
      { 
        id: 'putney-1', 
        rank: 1, 
        name: 'Humphreys London', 
        address: 'Putney Bridge Road, London SW15', 
        googleRating: 4.6, 
        description: 'Humphreys London specialises in handcrafted bespoke engagement rings. Buyers value traditional goldsmithing skills.',
        whyWeLikeIt: 'We like the focus on traditional craftsmanship in this workshop; seeing the skill first-hand provides a great deal of confidence in the final piece.'
      },
      { id: 'putney-2', rank: 2, name: 'Mounir Jewellery', address: 'Lower Richmond Road, London SW15', googleRating: 4.5, description: 'Mounir Jewellery offers handcrafted engagement rings with a personal studio experience.' },
      { id: 'putney-3', rank: 3, name: 'Penelope Red', address: 'Putney Exchange, London SW15', googleRating: 4.4, description: 'Penelope Red provides contemporary engagement ring styles for buyers seeking modern design.' },
      { id: 'putney-4', rank: 4, name: 'Accessories of Old', address: 'Lower Richmond Road, London SW15', googleRating: 4.3, description: 'Accessories of Old offers vintage and estate jewellery suitable for unconventional engagement rings.' },
      { id: 'putney-5', rank: 5, name: 'Oliver Bonas', address: 'Putney High Street, London SW15', googleRating: 4.2, trustpilotRating: 4.1, description: 'Oliver Bonas offers affordable, non-traditional engagement-style rings.' }
    ]
  },
  {
    name: 'Wimbledon Village',
    slug: 'wimbledon-village',
    description: 'Refined, village-style luxury with a focus on artisan excellence.',
    metaTitle: 'Wimbledon Village Engagement Ring Suppliers | Luxury Engagement Rings in London',
    metaDesc: 'Explore the refined engagement ring suppliers in Wimbledon Village. An understated guide providing expert reassurance for a significant purchase.',
    imageUrl: 'https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?auto=format&fit=crop&q=80&w=1200',
    suppliers: [
      { 
        id: 'wimbledon-1', 
        rank: 1, 
        name: 'Michael Platt', 
        address: 'Church Road, Wimbledon SW19', 
        googleRating: 4.7, 
        description: 'Michael Platt is a respected local goldsmith specialising in bespoke engagement rings.',
        whyWeLikeIt: 'We’ve found their status as local master goldsmiths provides a level of accountability and personal service that is genuinely refreshing.'
      },
      { id: 'wimbledon-2', rank: 2, name: 'Eternal Jewels', address: 'Wimbledon Village, London SW19', googleRating: 4.6, description: 'Eternal Jewels offers bespoke engagement rings and remodelling services.' },
      { id: 'wimbledon-3', rank: 3, name: 'Sinclair Jewellery', address: 'Wimbledon Village, London SW19', googleRating: 4.5, description: 'Sinclair Jewellery provides handmade engagement rings with on-site workshop facilities.' },
      { id: 'wimbledon-4', rank: 4, name: 'Art Jewels', address: 'Wimbledon Broadway, London SW19', googleRating: 4.4, description: 'Art Jewels offers engagement rings at competitive prices with strong customer service.' },
      { id: 'wimbledon-5', rank: 5, name: 'Militza Ortiz Jewellery', address: 'Wimbledon, London SW19', googleRating: 4.6, description: 'Militza Ortiz creates bespoke engagement rings with an artistic, handcrafted approach.' }
    ]
  },
  {
    name: 'Battersea',
    slug: 'battersea',
    description: 'The new face of London luxury, blending iconic industrial design with fine craft.',
    metaTitle: 'Battersea Engagement Ring Suppliers | Luxury Engagement Rings in London',
    metaDesc: 'Our independent guide to the new wave of engagement ring suppliers in Battersea. Discover exceptional craftsmanship through a calm and considered lens.',
    imageUrl: 'https://images.unsplash.com/photo-1667232328243-71822452ca40?auto=format&fit=crop&q=80&w=1200',
    suppliers: [
      { 
        id: 'battersea-1', 
        rank: 1, 
        name: 'Asquiths of London', 
        address: 'Northcote Road, London SW11', 
        googleRating: 4.6, 
        description: 'Asquiths of London specialises in bespoke engagement rings and high-quality repairs.',
        whyWeLikeIt: 'We appreciate how they’ve brought high-tier bespoke service to this corner of London, offering a very professional and considered experience.'
      },
      { id: 'battersea-2', rank: 2, name: 'The Northcote Jeweller', address: 'Northcote Road, London SW11', googleRating: 4.5, description: 'The Northcote Jeweller offers bespoke engagement rings with a focus on coloured gemstones.' },
      { id: 'battersea-3', rank: 3, name: 'W&W Jewellery', address: 'Battersea Reach, London SW18', googleRating: 4.7, description: 'W&W Jewellery creates high-end bespoke engagement rings with a collaborative design process.' },
      { id: 'battersea-4', rank: 4, name: 'Jessica Mary Design', address: 'Battersea, London SW11', googleRating: 4.6, description: 'Jessica Mary Design offers bespoke engagement rings with feminine, nature-inspired designs.' },
      { id: 'battersea-5', rank: 5, name: 'Muljis Jewellers', address: 'Tooting, London SW17', googleRating: 4.6, description: 'Muljis Jewellers is known for traditional bespoke engagement rings with strong customer service.' }
    ]
  }
];

// Added SUPPLIERS export to fix BestRings.tsx error
export const SUPPLIERS = [
  {
    id: 'boodles-mayfair',
    name: 'Boodles',
    image: 'https://images.unsplash.com/photo-1584302174649-52c7419e455e?auto=format&fit=crop&q=80&w=800',
    specialty: 'British Heritage & Bespoke',
    description: 'A quintessentially British luxury jeweller known for exceptional craftsmanship and rare pink diamonds.',
    reasoning: 'Boodles offers a level of personal service that is increasingly rare. Their in-house design team in Mayfair is world-class.',
    website: 'https://www.boodles.com',
    location: 'Mayfair'
  },
  {
    id: 'jessica-mccormack',
    name: 'Jessica McCormack',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
    specialty: 'Modern Antique Fusion',
    description: 'Handcrafted engagement rings that blend antique inspiration with modern design from a private Mayfair townhouse.',
    reasoning: 'McCormack’s aesthetic is unique in the market—perfect for those seeking something that feels timeless yet distinctly modern.',
    website: 'https://www.jessicamccormack.com',
    location: 'Mayfair'
  },
  {
    id: 'ingle-rhode',
    name: 'Ingle & Rhode',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800',
    specialty: 'Ethical & Fairtrade',
    description: 'The ethical jeweller, specialising in Fairtrade gold and responsibly sourced diamonds.',
    reasoning: 'For the buyer who prioritises ethics as much as aesthetics, Ingle & Rhode is the gold standard in the UK.',
    website: 'https://www.ingleandrhode.co.uk',
    location: 'Marylebone'
  }
];

// Renamed GENERAL_FAQS to FAQS and added category to fix KnowledgeHub.tsx error
export const FAQS = [
  { 
    category: 'Process', 
    question: 'What should I expect at a London engagement ring appointment?', 
    answer: 'Most top-tier London showrooms operate by appointment. Expect a calm environment where you can view stones under magnification and discuss settings without pressure.' 
  },
  { 
    category: 'Process', 
    question: 'How long do bespoke engagement rings usually take?', 
    answer: 'In London workshops, bespoke pieces typically take 6 to 8 weeks from design approval to final hallmarking.' 
  },
  { 
    category: 'Budget', 
    question: 'Is it better to set a budget before visiting a jeweller?', 
    answer: 'Yes. A clear budget allows a consultant to show you the best possible stones within your range, rather than wasting time on options that aren\'t feasible.' 
  },
  { 
    category: 'Diamonds', 
    question: 'What are the 4Cs and why do they matter?', 
    answer: 'Cut, Colour, Clarity, and Carat weight are the global standards for assessing diamond quality. The Cut is often considered the most important as it directly affects brilliance.' 
  },
  { 
    category: 'Practical', 
    question: 'Can I use an heirloom diamond in a new setting?', 
    answer: 'Many London ateliers, particularly in Mayfair and Marylebone, specialise in remodelling heirloom stones into contemporary designs.' 
  }
];
