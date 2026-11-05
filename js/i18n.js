/**
 * Riotive Autowash Innovations (Pvt) Ltd
 * Bilingual Internationalization (i18n) Engine: English & Sinhala (සිංහල)
 * Complete Site Reconstruction with Entry Popup & Header Switcher
 */

const RiotiveI18n = (() => {
  const STORAGE_KEY = 'riotive_language';
  const POPUP_SEEN_KEY = 'riotive_lang_popup_seen';

  // Master Bilingual Dictionary
  const translations = {
    en: {
      // Top Bar
      top_badge: "Sri Lankan Engineering",
      top_announcement: "Pioneering, Home-Grown Automated Vehicle Wash Technology",
      top_location: "📍 Uhumeeya, Kurunegala",

      // Navigation
      nav_home: "Home",
      nav_machines: "Machines & Products ▾",
      nav_machines_short: "Machines ▾",
      nav_bike: "🏍️ Aqua Dragon Mini (Bike)",
      nav_car: "🚗 Aqua Dragon Car Wash",
      nav_bus: "🚌 Aqua Dragon Massive (Bus)",
      nav_purchasing: "Purchasing",
      nav_about: "About Us",
      nav_contact: "Contact",
      nav_mission_vision: "Mission & Vision",
      nav_pillars: "Core Pillars",
      nav_leadership: "Leadership",
      nav_specs: "Specifications",
      nav_quote_btn: "Request Quote",
      nav_get_touch: "Get In Touch",
      nav_wa_call: "WhatsApp Call",

      // Dropdown badges
      badge_ready: "Ready",
      badge_soon: "Soon",
      badge_fleet: "Fleet",

      // Home Hero Section
      hero_badge: "Proudly Designed in Sri Lanka",
      hero_title: "The Future of <br><span class=\"gradient-text-cyan\">Vehicle Care</span> Is Here.",
      hero_tagline: "We design and manufacture cutting-edge automated washing systems for motorcycles and vehicles. Experience unmatched speed, deep precision cleaning, and eco-efficient performance powered by home-grown engineering excellence.",
      hero_btn_explore: "Explore Our Machines",
      hero_btn_quote: "Request Quotation",
      hero_btn_whatsapp: "Chat on WhatsApp",
      hero_media_title: "Smart Gantry Robotics",
      hero_media_desc: "Touch-free automated precision with adaptive sensor guidance",

      // Trust & Value Strip
      trust_1_title: "100% Scratch-Free",
      trust_1_desc: "Non-contact dynamic fluid mechanics protect clearcoat",
      trust_2_title: "Water Efficient",
      trust_2_desc: "< 100 Litres per cycle with recycling options",
      trust_3_title: "Rapid Cycle",
      trust_3_desc: "Complete wash cycle in under 8 mins",
      trust_4_title: "Industrial PLC",
      trust_4_desc: "High-reliability automated logic hardware for continuous duty",
      trust_5_title: "24/7 Breakdown Dispatch",
      trust_5_desc: "Turnkey installation, operator training & direct warranty",

      // Products Section
      prod_sec_tag: "Machine Ecosystem",
      prod_sec_title: "Automated Washing Systems For Every Vehicle Tier",
      prod_sec_desc: "From compact urban motorcycle service centers to high-throughput commercial transit hubs, explore our engineered solutions.",

      // Product 1 - Bike
      p1_badge: "Ready for Delivery",
      p1_cat: "Motorcycle Commercial Bay",
      p1_title: "Aqua Dragon Mini",
      p1_desc: "The world's first automated bike washing system powered by dynamic dual-nozzle technology with 360-degree contour mapping.",
      p1_spec_cycle_k: "Cycle Duration:",
      p1_spec_cycle_v: "7 - 8 Minutes",
      p1_spec_cost_k: "Cost per Wash:",
      p1_spec_cost_v: "< LKR 100",
      p1_spec_foot_k: "Footprint:",
      p1_spec_foot_v: "7 ft × 13 ft bay",
      p1_spec_power_k: "Power Requirement:",
      p1_spec_power_v: "Single Phase 230V",
      p1_price_sub: "Starting From",
      p1_btn: "Full Specs →",

      // Product 2 - Car
      p2_badge: "Coming Soon",
      p2_cat: "Passenger Vehicles",
      p2_title: "Aqua Dragon Car Wash",
      p2_desc: "Engineered with breakthrough contour-tracking robotics. Our 6-nozzle system automatically adjusts spray geometry to match every curve and wheel arch.",
      p2_spec_nozzle_k: "Nozzle Architecture:",
      p2_spec_nozzle_v: "6-Nozzle Dynamic Gantry",
      p2_spec_finish_k: "Finish Level:",
      p2_spec_finish_v: "Showroom High-Gloss",
      p2_spec_chem_k: "Chemical System:",
      p2_spec_chem_v: "Automated Premium Foam",
      p2_spec_stat_k: "Status:",
      p2_spec_stat_v: "Pre-Order Reservations Open",
      p2_avail_k: "Availability",
      p2_avail_v: "Still Developing",
      p2_btn: "Full Specs →",

      // Product 3 - Bus
      p3_badge: "Coming Soon",
      p3_cat: "Heavy Fleets & Transit",
      p3_title: "Aqua Dragon Massive",
      p3_desc: "Next-generation commercial transit washing for high-capacity fleets, public transit authorities, and coach operators with rapid turnaround.",
      p3_spec_speed_k: "Throughput Speed:",
      p3_spec_speed_v: "Under Few Minutes",
      p3_spec_under_k: "Undercarriage:",
      p3_spec_under_v: "Targeted High-Pressure Flush",
      p3_spec_cov_k: "Coverage:",
      p3_spec_cov_v: "Bumper-to-Bumper Detailing",
      p3_spec_user_k: "Target Users:",
      p3_spec_user_v: "Depots & Fleet Hubs",
      p3_avail_k: "Availability",
      p3_avail_v: "Still Developing",
      p3_btn: "Full Specs →",

      // Purchasing Workflow
      wf_tag: "Procurement Workflow",
      wf_title: "8-Step Structured Purchasing Method",
      wf_desc: "Clear payment milestones ensure seamless fabrication, shipping, pressure testing, and turnkey technical handoff.",
      wf_s1_step: "Step 01",
      wf_s1_title: "Apply Quotation",
      wf_s1_desc: "Submit your official inquiry request with bay dimensions and utility readiness.",
      wf_s2_step: "Step 02",
      wf_s2_title: "Sales Agreement",
      wf_s2_desc: "Sign official commercial contract terms, delivery schedule, and warranty conditions.",
      wf_s3_step: "Step 03",
      wf_s3_title: "40% Down Payment",
      wf_s3_desc: "Initial manufacturing deposit to commence machinery fabrication and assembly.",
      wf_s4_step: "Step 04",
      wf_s4_title: "Manufacturing",
      wf_s4_desc: "Custom SS 304 frame welding, smart PLC wiring, and pump calibration.",
      wf_s5_step: "Step 05",
      wf_s5_title: "Order Delivery",
      wf_s5_desc: "Direct on-site machinery dispatch and safe offloading to your service station.",
      wf_s6_step: "Step 06",
      wf_s6_title: "Installation",
      wf_s6_desc: "Assembly, water & electrical hookup, and complete pressure vector commissioning.",
      wf_s7_step: "Step 07",
      wf_s7_title: "60% Final Payment",
      wf_s7_desc: "Post-testing invoice settlement once the bay passes full automated test washing.",
      wf_s8_step: "Step 08",
      wf_s8_title: "Final Handover",
      wf_s8_desc: "Certified operator staff training, operational sign-off, and handover of system keys.",

      // Video Gallery
      vid_tag: "Watch It In Action",
      vid_title: "Official Video Gallery",
      vid_desc: "See the Aqua Dragon automated wash systems operating under realistic commercial conditions.",
      vid_sub_yt: "Subscribe on YouTube",
      vid_1_title: "Aqua Dragon Mini: Full 8-Minute Automated Motorcycle Wash Demo",
      vid_2_title: "Contour-Tracking 6-Nozzle Car Wash: Touchless High-Gloss Rinse",
      vid_3_title: "Rapid Fleet Transit Depot Wash: Heavy-Duty Commercial Transit",
      social_card_tag: "Connect With Us Online",
      social_card_title: "Follow Our Official Facebook & YouTube Channels",
      social_card_desc: "Stay up-to-date with new machine deployments across Sri Lanka, customer wash bay walkthroughs, and engineering demonstrations.",

      // About Section & Page
      about_tag: "About Riotive",
      about_title: "Pioneering Intelligent Autowash Engineering",
      about_p1: "At <strong>Riotive Autowash Innovations (Pvt) Ltd</strong>, we engineer intelligent, automated vehicle washing solutions that replace slow, manual labor with high-throughput mechanical precision.",
      about_p2: "Born out of a drive to solve the inefficiencies of conventional wash bays—excessive water usage, high labor costs, inconsistent wash quality, and scratch risks—we design systems that deliver showroom-grade finishes while drastically reducing operating overhead.",
      about_btn: "Read Our Full Story →",
      about_card_title: "End-to-End Operational Partnership",
      about_card_desc: "We do not just manufacture hardware; we provide complete, end-to-end technical support across every phase of your business:",
      about_li1_strong: "On-Site Installation & Assembly:",
      about_li1_desc: "Tailored mechanical setup to your bay layout.",
      about_li2_strong: "Pressure Commissioning:",
      about_li2_desc: "Strict calibration of spray vectors, sensors, and water pressure.",
      about_li3_strong: "Hands-On Operator Training:",
      about_li3_desc: "Certified training for your crew to ensure safe, smooth operation.",
      about_li4_strong: "24/7 Breakdown Dispatch & Warranty:",
      about_li4_desc: "Direct component replacement & zero-downtime policy.",

      about_tag_story: "Our Engineering Story",
      about_badge_hg: "Home-Grown Excellence",
      about_hero_title: "Pioneering Intelligent <br><span class=\"gradient-text-cyan\">Autowash Engineering</span>",
      about_hero_tagline: "At Riotive Autowash Innovations (PVT) LTD, we engineer intelligent, automated vehicle washing solutions that replace slow, manual labor with high-throughput mechanical precision.",
      about_btn_4p: "Explore Our 4 Pillars",
      about_btn_ldr: "Contact Leadership",
      about_tag_who: "Who We Are",
      about_title_trans: "Transforming Vehicle Maintenance Through Mechanical Innovation",
      about_mission_title: "Our Mission",
      about_vision_title: "Our Vision",
      about_pillars_title: "Our 4 Core Pillars",
      about_pillars_desc: "Every machine manufactured at our Bulupitiya facility adheres to rigorous engineering standards.",
      about_part_title: "End-to-End Operational Partnership",
      about_lead_title: "Leadership & Founder Vision",
      about_salith_title: "Salith Rathnayaka",
      about_salith_role: "Founder & Technical Director",
      about_factory_title: "Factory & Office Location",

      // 4 Pillars
      pil_1_title: "Pro-Grade Industrial Build",
      pil_1_desc: "Built to last in harsh bay environments using heavy-duty SS 304 austenitic stainless steel frames and hot-dip galvanized anti-corrosion structural steel.",
      pil_2_title: "Intelligent Automation",
      pil_2_desc: "Powered by intelligent industrial PLC automation and proprietary thrust-vector nozzle motion for complete vehicle coverage.",
      pil_3_title: "Eco-Efficient Engineering",
      pil_3_desc: "Precision chemical dosing and optimized spray geometries engineered to cut water and electrical consumption by a significant margin compared to manual hoses.",
      pil_4_title: "Scratch-Safe Care",
      pil_4_desc: "Automated, high-impact dynamic sprays and snow-foam encapsulation protect vehicle paint from abrasive swirl marks caused by contact washing.",

      // Contact & Quotation Section
      cont_tag: "Let's Connect",
      cont_title: "Let’s Build a Faster, Smarter Wash Bay Together",
      cont_desc: "Whether you are planning a new automated wash facility, upgrading an existing workshop, or looking for an official machinery quotation, our engineering team is here to assist you.",
      cont_card_title: "Direct Engineering Contact",
      cont_card_sub: "Reach out directly to discuss machinery specifications, bay civil requirements, or investor partnerships.",
      lbl_company: "Company",
      lbl_founder: "Founder / Executive Contact",
      lbl_location: "Manufacturing Facility Location",
      val_location: "Six Mile Post, Bulupitiya, Uhumeeya, Kurunegala, Sri Lanka",
      lbl_phone: "Direct Phone / WhatsApp",
      lbl_email: "Official Email",
      lbl_website: "Official Website",
      instant_tag: "Instant Connect",
      instant_title: "Connect via WhatsApp & Social Channels",
      instant_desc: "Message us directly on WhatsApp for immediate machinery pricing, delivery lead times, and bay civil guidelines.",
      chat_now_title: "Chat Now",
      btn_wa_chat: "💬 Message on WhatsApp",
      btn_phone_call: "📞 Call 074 164 3595",
      social_channels_title: "Our Official Channels",
      fb_channel_title: "Facebook Page",
      fb_channel_sub: "Official Page",
      yt_channel_title: "YouTube Channel",
      yt_channel_sub: "Official Videos",

      // Contact Page
      contact_hero_tag: "Get In Touch",
      contact_hero_title: "Let’s Build a Faster, <br><span class=\"gradient-text-cyan\">Smarter Wash Bay Together.</span>",
      contact_direct_tag: "Direct Access",
      contact_exec_title: "Executive Engineering Contact",

      // Bike Page Specifics
      bike_tag_flagship: "Flagship Product",
      bike_hero_title: "Aqua Dragon <br><span class=\"gradient-text-cyan\">Automatic Bike Wash</span>",
      bike_hero_card_title: "Dynamic Robotic Articulation",
      bike_hero_card_desc: "Proprietary oscillating nozzles follow complete 360-degree motorcycle contours",
      bike_tag_anatomy: "Engineering Anatomy",
      bike_title_anatomy: "Core Technology & Industrial Build",
      bike_tag_seq: "Wash Sequence",
      bike_title_seq: "Automated 3-Stage Cleaning Sequence",
      bike_tag_matrix: "Model Matrix",
      bike_title_matrix: "Aqua Dragon Automatic Bike Wash Models",
      bike_desc_matrix: "Compare the 4 commercial configurations available for delivery across Sri Lanka.",
      tbl_spec: "Specification",
      tbl_water: "Water Consumption",
      tbl_power: "Power Consumption",
      tbl_cycle: "Cycle Duration",
      tbl_dim: "Dimensions",
      tbl_price: "Price (excl. discount)",
      tbl_order: "Order Direct",
      bike_stage_1_title: "Phase 1: Targeted Degreaser Spray",
      bike_stage_1_desc: "Dual dedicated chemical nozzles deliver a concentrated, industrial-grade solvent spray specifically targeting road oil, grease, engine grime, and chain residue.",
      bike_stage_2_title: "Phase 2: Ultra Snow Foam Shampoo",
      bike_stage_2_desc: "High-density active snow foam thoroughly blankets the motorcycle exterior, encapsulating grit and abrasive dust particles to ensure 100% scratch-free wash safety.",
      bike_stage_3_title: "Phase 3: High-Pressure Robotic Rinse",
      bike_stage_3_desc: "Pneumatically oscillating piston-pump jets sweep across 360-degree contours, stripping away all dissolved dirt and foam with powerful, pinpoint water streams.",

      // Car Page
      car_tag_dev: "Under Active Development",
      car_hero_title: "Aqua Dragon <br><span class=\"gradient-text-cyan\">Automatic Car Wash Gantry</span>",
      car_hero_card_title: "Contour-Tracking Robotics",
      car_tag_focus: "Engineering Focus",
      car_title_detailing: "Automated Passenger Vehicle Detailing",
      car_tag_rollout: "Commercial Rollout",
      car_title_deploy: "Be The First To Deploy In Your City",

      // Bus Page
      bus_tag_dev: "Under Active Development",
      bus_hero_title: "Aqua Dragon Massive <br><span class=\"gradient-text-cyan\">Automatic Bus Wash</span>",
      bus_hero_card_title: "Depot Rapid Throughput",
      bus_tag_transit: "Commercial Transit",
      bus_title_depots: "Engineered For High-Throughput Depots",
      bus_tag_tailoring: "Facility Tailoring",
      bus_title_layout: "Custom Engineered To Your Facility Layout",

      // Footer
      ft_brand_desc: "Pioneering Sri Lankan-designed automated vehicle washing systems with intelligent industrial PLC robotics and high-precision fluid dynamics.",
      ft_col_links: "Quick Links",
      ft_col_services: "Engineering Services",
      ft_col_hq: "Headquarters",
      ft_link_process: "8-Step Purchasing Process",
      ft_link_pillars: "4 Engineering Pillars",
      ft_link_install: "Turnkey Bay Installation",
      ft_link_training: "Operator Training & Certification",
      ft_link_support: "24/7 Breakdown Dispatch",
      ft_link_quote: "Direct Quotation Request",
      ft_copy: "© 2026 Riotive Autowash Innovations (Pvt) Ltd. All Rights Reserved.",
      ft_powered: "Powered by Riotive Autowash Innovation Digital Solutions | Designed in Sri Lanka"
    },

    si: {
      // Top Bar
      top_badge: "ශ්‍රී ලාංකීය ඉංජිනේරු විශිෂ්ටත්වය",
      top_announcement: "ශ්‍රී ලංකාවේ ප්‍රථම සහ එකම දේශීය ස්වයංක්‍රීය වාහන සේදුම් තාක්ෂණය",
      top_location: "📍 උහුමීය, කුරුණෑගල",

      // Navigation
      nav_home: "මුල් පිටුව",
      nav_machines: "යන්ත්‍ර සහ නිෂ්පාදන ▾",
      nav_machines_short: "යන්ත්‍ර ▾",
      nav_bike: "🏍️ Aqua Dragon Mini (යතුරුපැදි)",
      nav_car: "🚗 Aqua Dragon Car Wash (මෝටර් රථ)",
      nav_bus: "🚌 Aqua Dragon Massive (බස් රථ)",
      nav_purchasing: "මිලදී ගැනීමේ ක්‍රමය",
      nav_about: "අප ගැන",
      nav_contact: "අප අමතන්න",
      nav_mission_vision: "අපගේ අරමුණ සහ දැක්ම",
      nav_pillars: "ප්‍රධාන කුළුණු",
      nav_leadership: "නායකත්වය",
      nav_specs: "තාක්ෂණික පිරිවිතර",
      nav_quote_btn: "මිල ගණන් ලබාගන්න",
      nav_get_touch: "සම්බන්ධ වන්න",
      nav_wa_call: "WhatsApp ඇමතුමක්",

      // Dropdown badges
      badge_ready: "සූදානම්",
      badge_soon: "ළඟදීම",
      badge_fleet: "වාණිජ",

      // Home Hero Section
      hero_badge: "ශ්‍රී ලංකාවේ අභිමානවත් නිෂ්පාදනයක්",
      hero_title: "වාහන සේදීමේ <br><span class=\"gradient-text-cyan\">අනාගත තාක්ෂණය</span> දැන් මෙහි ඇත.",
      hero_tagline: "යතුරුපැදි සහ සියලුම වාහන සඳහා නවීනතම ස්වයංක්‍රීය සෝදන පද්ධති අපි සැලසුම් කර නිෂ්පාදනය කරන්නෙමු. දේශීය ඉංජිනේරු විශිෂ්ටත්වයෙන් යුතු උපරිම වේගය, සීරීම් රහිත පිරිසිදුකම සහ ජලය හා විදුලිය ඉතිරි කරන සුපිරි කාර්යක්ෂමතාව අත්විඳින්න.",
      hero_btn_explore: "යන්ත්‍ර පරීක්ෂා කරන්න",
      hero_btn_quote: "මිල ගණන් ලබාගන්න",
      hero_btn_whatsapp: "WhatsApp මගින් විමසන්න",
      hero_media_title: "Smart Gantry රොබෝ තාක්ෂණය",
      hero_media_desc: "සංවේදක මගින් ස්වයංක්‍රීයව මෙහෙයවෙන ස්පර්ශ-රහිත නිවැරදි සේදීම",

      // Trust & Value Strip
      trust_1_title: "100% සීරීම් රහිතයි",
      trust_1_desc: "ස්පර්ශ-රහිත අධි පීඩන තාක්ෂණයෙන් වාහනයේ මතුපිට සීරීම් වලින් ආරක්ෂා කරයි",
      trust_2_title: "උපරිම ජල ඉතිරිය",
      trust_2_desc: "සේදුම් චක්‍රයකට ලීටර් 100 ට අඩු පරිභෝජනය (ප්‍රතිචක්‍රීකරණ පහසුකම් සහිතයි)",
      trust_3_title: "විනාඩි 8 ක වේගවත් සේදීම",
      trust_3_desc: "විනාඩි 8 කට අඩු කාලයකදී සම්පූර්ණ පිරිසිදු කිරීම",
      trust_4_title: "කාර්මික Smart PLC තාක්ෂණය",
      trust_4_desc: "අඛණ්ඩ ක්‍රියාකාරීත්වය සඳහා ඉහළ විශ්වසනීයත්වයකින් යුත් ජපන් ස්වයංක්‍රීය පාලනය",
      trust_5_title: "ක්ෂණික සේවා සහාය",
      trust_5_desc: "සම්පූර්ණ ස්ථාපනය, ක්‍රියාකරු පුහුණුව සහ සෘජු ආයතනික වගකීම",

      // Products Section
      prod_sec_tag: "යන්ත්‍ර පරාසය",
      prod_sec_title: "සියලුම වර්ගයේ වාහන සඳහා ස්වයංක්‍රීය සේදුම් පද්ධති",
      prod_sec_desc: "කුඩා නාගරික යතුරුපැදි සේවා මධ්‍යස්ථානවල සිට අධි-ධාරිතා වාණිජ ප්‍රවාහන සේවා දක්වා, අපගේ ඉංජිනේරුමය විසඳුම් පරීක්ෂා කරන්න.",

      // Product 1 - Bike
      p1_badge: "ලබාදීමට සූදානම්",
      p1_cat: "යතුරුපැදි වාණිජ සේදුම් පද්ධතිය",
      p1_title: "Aqua Dragon Mini",
      p1_desc: "අංශක 360 ක සමෝච්ඡ සිතියම්ගත කිරීම් සහිත ගතික ද්විත්ව නොසල් තාක්ෂණයෙන් ක්‍රියාත්මක වන ලොව ප්‍රථම ස්වයංක්‍රීය යතුරුපැදි සෝදන යන්ත්‍රය.",
      p1_spec_cycle_k: "සේදීමේ කාලය:",
      p1_spec_cycle_v: "විනාඩි 7 - 8",
      p1_spec_cost_k: "සේදීමකට යන වියදම:",
      p1_spec_cost_v: "රු. 100 ට අඩුයි",
      p1_spec_foot_k: "අවශ්‍ය ඉඩකඩ:",
      p1_spec_foot_v: "අඩි 7 × අඩි 13 ක බේ එකක්",
      p1_spec_power_k: "විදුලි බලය:",
      p1_spec_power_v: "Single Phase 230V",
      p1_price_sub: "ආරම්භක මිල",
      p1_btn: "සම්පූර්ණ විස්තර →",

      // Product 2 - Car
      p2_badge: "ළඟදීම බලාපොරොත්තු වන්න",
      p2_cat: "මෝටර් රථ සහ කුඩා වාහන",
      p2_title: "Aqua Dragon Car Wash",
      p2_desc: "වාහනයේ හැඩයට අනුව ස්වයංක්‍රීයව හැඩගැසෙන නොසල් 6 ක රොබෝ තාක්ෂණයෙන් යුක්තයි. සෑම වක්‍රයකටම ගැලපෙන සේදුම් කෝණ සකස් වේ.",
      p2_spec_nozzle_k: "නොසල් ව්‍යුහය:",
      p2_spec_nozzle_v: "නොසල් 6 ක ගතික ගැන්ට්‍රිය",
      p2_spec_finish_k: "සේදුම් නිමාව:",
      p2_spec_finish_v: "ෂෝරූම් මට්ටමේ දිදුලන නිමාව",
      p2_spec_chem_k: "රසායනික පද්ධතිය:",
      p2_spec_chem_v: "ස්වයංක්‍රීය ප්‍රිමියම් ෆෝම්",
      p2_spec_stat_k: "තත්ත්වය:",
      p2_spec_stat_v: "පෙර ඇණවුම් දැන් විවෘතයි",
      p2_avail_k: "ලබාගත හැකි කාලය",
      p2_avail_v: "සංවර්ධනය වෙමින් පවතී",
      p2_btn: "සම්පූර්ණ විස්තර →",

      // Product 3 - Bus
      p3_badge: "ළඟදීම බලාපොරොත්තු වන්න",
      p3_cat: "බස් රථ සහ බර වාහන පෙළ",
      p3_title: "Aqua Dragon Massive",
      p3_desc: "අධි ධාරිතාවයකින් යුත් බස් රථ සහ වාණිජ ප්‍රවාහන සේවා සඳහා සුපිරි වේගවත් ස්වයංක්‍රීය පිරිසිදු කිරීමේ පද්ධතිය.",
      p3_spec_speed_k: "සේදීමේ වේගය:",
      p3_spec_speed_v: "මිනිත්තු කිහිපයක් ඇතුළත",
      p3_spec_under_k: "යටිපතුල සේදීම:",
      p3_spec_under_v: "ඉලක්කගත අධි පීඩන ෆ්ලෂ්",
      p3_spec_cov_k: "සේදුම් ආවරණය:",
      p3_spec_cov_v: "ඉදිරිපස සිට පසුපස දක්වා සම්පූර්ණ සේදීම",
      p3_spec_user_k: "සුදුසු වන්නේ:",
      p3_spec_user_v: "ඩිපෝ සහ ප්‍රවාහන මධ්‍යස්ථාන",
      p3_avail_k: "ලබාගත හැකි කාලය",
      p3_avail_v: "සංවර්ධනය වෙමින් පවතී",
      p3_btn: "සම්පූර්ණ විස්තර →",

      // Purchasing Workflow
      wf_tag: "මිලදී ගැනීමේ ක්‍රමවේදය",
      wf_title: "පියවර 8 ක විධිමත් මිලදී ගැනීමේ ක්‍රමවේදය",
      wf_desc: "පැහැදිලි ගෙවීම් පියවරයන් මගින් නිෂ්පාදනය, ප්‍රවාහනය, පීඩන පරීක්ෂණ සහ තාක්ෂණික භාරදීම විශ්වාසනීයව සිදුකෙරේ.",
      wf_s1_step: "පියවර 01",
      wf_s1_title: "මිල ගණන් ලබාගැනීම",
      wf_s1_desc: "ඔබගේ සේවා ස්ථානයේ ප්‍රමාණය සහ විදුලි/ජල පහසුකම් සමග නිල විමසීම යොමු කරන්න.",
      wf_s2_step: "පියවර 02",
      wf_s2_title: "විකුණුම් ගිවිසුම",
      wf_s2_desc: "නිල වාණිජ කොන්ත්‍රාත්තු කොන්දේසි, බෙදාහැරීමේ කාලසටහන සහ වගකීම් අත්සන් කිරීම.",
      wf_s3_step: "පියවර 03",
      wf_s3_title: "40% මූලික ගෙවීම",
      wf_s3_desc: "යන්ත්‍ර නිෂ්පාදනය සහ එකලස් කිරීම ආරම්භ කිරීම සඳහා වන මූලික තැන්පතුව.",
      wf_s4_step: "පියවර 04",
      wf_s4_title: "යන්ත්‍ර නිෂ්පාදනය",
      wf_s4_desc: "SS 304 මල නොබැඳෙන වානේ රාමු, ස්මාර්ට් PLC වයරින් සහ පොම්ප ක්‍රමාංකනය.",
      wf_s5_step: "පියවර 05",
      wf_s5_title: "භාණ්ඩ බෙදාහැරීම",
      wf_s5_desc: "ඔබගේ සේවා ස්ථානය වෙත යන්ත්‍රය ආරක්ෂිතව ප්‍රවාහනය කර භාරදීම.",
      wf_s6_step: "පියවර 06",
      wf_s6_title: "ස්ථාපනය කිරීම",
      wf_s6_desc: "එකලස් කිරීම, ජල හා විදුලි සම්බන්ධතා ලබාදීම සහ පීඩන පරීක්ෂණ සිදුකිරීම.",
      wf_s7_step: "පියවර 07",
      wf_s7_title: "60% අවසන් ගෙවීම",
      wf_s7_desc: "ස්වයංක්‍රීය සේදුම් පරීක්ෂාව සාර්ථකව අවසන් වූ පසු අවසාන ඉන්වොයිසිය පියවීම.",
      wf_s8_step: "පියවර 08",
      wf_s8_title: "සම්පූර්ණ භාරදීම",
      wf_s8_desc: "පුහුණු කාර්යමණ්ඩල සහතික කිරීම, මෙහෙයුම් ලියකියවිලි සහ යන්ත්‍ර යතුරු භාරදීම.",

      // Video Gallery
      vid_tag: "ක්‍රියාකාරීත්වය නරඹන්න",
      vid_title: "නිල වීඩියෝ එකතුව",
      vid_desc: "Aqua Dragon ස්වයංක්‍රීය පද්ධති සැබෑ වාණිජ තත්ත්වයන් යටතේ ක්‍රියාත්මක වන ආකාරය නරඹන්න.",
      vid_sub_yt: "YouTube හි Subscribe කරන්න",
      vid_1_title: "Aqua Dragon Mini: විනාඩි 8 ක සම්පූර්ණ ස්වයංක්‍රීය යතුරුපැදි සේදුම් ක්‍රියාවලිය",
      vid_2_title: "නොසල් 6 කින් යුත් කාර් වොෂ්: ස්පර්ශ-රහිත සුපිරි නිමාව",
      vid_3_title: "අධිවේගී වාණිජ බස් රථ සේදුම් පද්ධතිය",
      social_card_tag: "සමාජ මාධ්‍ය ඔස්සේ අප හා එක්වන්න",
      social_card_title: "අපගේ නිල Facebook සහ YouTube පිටු සමග එක්වන්න",
      social_card_desc: "ශ්‍රී ලංකාව පුරා නව යන්ත්‍ර ස්ථාපනයන්, පාරිභෝගික අදහස් සහ තාක්ෂණික තොරතුරු දැනගැනීමට එක්වන්න.",

      // About Section & Page
      about_tag: "Riotive ගැන",
      about_title: "බුද්ධිමත් ස්වයංක්‍රීය වාහන සේදුම් ඉංජිනේරු විශිෂ්ටත්වය",
      about_p1: "<strong>රියෝටිව් ඔටෝවොෂ් ඉනොවේෂන්ස් (පුද්) සමාගම</strong> වන අපි, සාම්ප්‍රදායික මන්දගාමී අත්කම් ශ්‍රමය වෙනුවට ඉහළ කාර්යක්ෂමතාවයකින් යුත් ස්වයංක්‍රීය යාන්ත්‍රික නිරවද්‍යතාවයෙන් පිරිපුන් වාහන සේදුම් පද්ධති නිර්මාණය කරන්නෙමු.",
      about_p2: "සාම්ප්‍රදායික සේවා ස්ථානවල අධික ජල හා කම්කරු වියදම්, අසමාන සේදුම් ගුණාත්මකභාවය සහ සීරීම් අවදානම් වලට ස්ථිර විසඳුමක් ලෙස, පිරිවැය අවම කර ෂෝරූම් මට්ටමේ දිදුලන නිමාවක් ලබාදෙන පද්ධති අපි නිපදවන්නෙමු.",
      about_btn: "අපගේ සම්පූර්ණ කතාව කියවන්න →",
      about_card_title: "සම්පූර්ණ ව්‍යාපාරික සහ තාක්ෂණික සහයෝගීතාවය",
      about_card_desc: "අපි යන්ත්‍ර සූත්‍ර පමණක් නොව, ඔබගේ ව්‍යාපාරයේ සෑම අදියරකදීම පූර්ණ තාක්ෂණික සහාය ලබා දෙන්නෙමු:",
      about_li1_strong: "ස්ථානීය එකලස් කිරීම සහ ස්ථාපනය:",
      about_li1_desc: "ඔබේ ඉඩකඩට ගැළපෙන පරිදි යාන්ත්‍රික සැකසුම සිදුකිරීම.",
      about_li2_strong: "පීඩන ක්‍රමාංකනය:",
      about_li2_desc: "නොසල්, සංවේදක සහ ජල පීඩනය නිවැරදිව පරීක්ෂා කිරීම.",
      about_li3_strong: "ක්‍රියාකරු ප්‍රායෝගික පුහුණුව:",
      about_li3_desc: "ආරක්ෂිත සහ සුමට මෙහෙයුම් සඳහා කාර්ය මණ්ඩල පුහුණුව.",
      about_li4_strong: "ක්ෂණික සේවා සහාය සහ වගකීම:",
      about_li4_desc: "අමතර කොටස් ක්ෂණිකව ලබාදීම සහ සෘජු ආයතනික වගකීම.",

      about_tag_story: "අපගේ ඉංජිනේරු කතාව",
      about_badge_hg: "දේශීය විශිෂ්ටත්වය",
      about_hero_title: "බුද්ධිමත් ස්වයංක්‍රීය <br><span class=\"gradient-text-cyan\">වාහන සේදුම් ඉංජිනේරු ශිල්පය</span>",
      about_hero_tagline: "රියෝටිව් ඔටෝවොෂ් ඉනොවේෂන්ස් (පුද්) සමාගම වන අපි, සාම්ප්‍රදායික මන්දගාමී අත්කම් ශ්‍රමය වෙනුවට ඉහළ කාර්යක්ෂමතාවයකින් යුත් ස්වයංක්‍රීය යාන්ත්‍රික නිරවද්‍යතාවයෙන් පිරිපුන් වාහන සේදුම් පද්ධති නිර්මාණය කරන්නෙමු.",
      about_btn_4p: "ප්‍රධාන කුළුණු 4 පරීක්ෂා කරන්න",
      about_btn_ldr: "නායකත්වය අමතන්න",
      about_tag_who: "අප කවුරුන්ද",
      about_title_trans: "යාන්ත්‍රික නවෝත්පාදනයෙන් වාහන නඩත්තු ක්ෂේත්‍රය පරිවර්තනය කිරීම",
      about_mission_title: "අපගේ අරමුණ",
      about_vision_title: "අපගේ දැක්ම",
      about_pillars_title: "අපගේ ප්‍රධාන කුළුණු 4",
      about_pillars_desc: "අපගේ බුලුපිටිය කර්මාන්තශාලාවේ නිපදවන සෑම යන්ත්‍රයක්ම දැඩි ඉංජිනේරු ප්‍රමිතීන්ට අනුකූලව නිමවා ඇත.",
      about_part_title: "සම්පූර්ණ මෙහෙයුම් සහයෝගීතාවය",
      about_lead_title: "නායකත්වය සහ නිර්මාතෘගේ දැක්ම",
      about_salith_title: "සලිත් රත්නායක",
      about_salith_role: "නිර්මාතෘ සහ තාක්ෂණික අධ්‍යක්ෂ",
      about_factory_title: "කර්මාන්තශාලාව සහ කාර්යාල පිහිටීම",

      // 4 Pillars
      pil_1_title: "කාර්මික ශ්‍රේණියේ ශක්තිමත් නිමාව",
      pil_1_desc: "SS 304 මල නොබැඳෙන වානේ රාමු සහ විඛාදන-විරෝධී ගැල්වනයිස් කරන ලද වානේ වලින් නිමවා ඇති බැවින් දීර්ඝ කාලයක් පවතී.",
      pil_2_title: "බුද්ධිමත් ස්වයංක්‍රීයකරණය",
      pil_2_desc: "කාර්මික PLC ස්වයංක්‍රීයකරණය සහ සුවිශේෂී නොසල් චලන තාක්ෂණයෙන් මුළු වාහනයම ආවරණය වන පරිදි සේදීම සිදු කෙරේ.",
      pil_3_title: "පරිසර හිතකාමී සහ පිරිමැසුම්දායකයි",
      pil_3_desc: "සාමාන්‍ය හෝස් සේදීමට වඩා ජලය සහ විදුලිය විශාල වශයෙන් ඉතිරි කර දෙන නිවැරදි රසායනික හා ජල පාලනයක් සහිතයි.",
      pil_4_title: "සීරීම් වලින් තොර උපරිම ආරක්ෂාව",
      pil_4_desc: "ස්පර්ශ-රහිත අධි පීඩන ස්ප්‍රේ සහ ස්නෝ ෆෝම් මගින් වාහනයේ මුල් තීන්ත සීරීම් වලින් උපරිමව ආරක්ෂා කරයි.",

      // Contact & Quotation Section
      cont_tag: "අප හා සම්බන්ධ වන්න",
      cont_title: "වේගවත්, නවීන සේවා මධ්‍යස්ථානයක් එක්ව ගොඩනගමු",
      cont_desc: "ඔබ නව ස්වයංක්‍රීය සේදුම් මධ්‍යස්ථානයක් සැලසුම් කරන්නේ නම්, පවතින සේවා ස්ථානයක් නවීකරණය කිරීමට හෝ නිල මිල ගණන් ලබා ගැනීමට අවශ්‍ය නම් අපගේ ඉංජිනේරු කණ්ඩායම සූදානම්.",
      cont_card_title: "සෘජු ඉංජිනේරු සම්බන්ධතාවය",
      cont_card_sub: "යන්ත්‍ර පිරිවිතර, ගොඩනැගිලි අවශ්‍යතා හෝ ආයෝජන පිළිබඳ සාකච්ඡා කිරීමට සෘජුවම අමතන්න.",
      lbl_company: "ආයතනය",
      lbl_founder: "නිර්මාතෘ / විධායක සම්බන්ධතාවය",
      lbl_location: "කර්මාන්තශාලා පිහිටීම",
      val_location: "6 කණුව, බුලුපිටිය, උහුමීය, කුරුණෑගල, ශ්‍රී ලංකාව",
      lbl_phone: "දුරකථන / WhatsApp",
      lbl_email: "නිල විද්‍යුත් තැපෑල",
      lbl_website: "නිල වෙබ් අඩවිය",
      instant_tag: "ක්ෂණික සම්බන්ධතාවය",
      instant_title: "WhatsApp සහ සමාජ මාධ්‍ය හරහා සම්බන්ධ වන්න",
      instant_desc: "යන්ත්‍රවල මිල ගණන්, බෙදාහැරීමේ තොරතුරු සහ අවශ්‍යතා ක්ෂණිකව දැනගැනීමට අපගේ WhatsApp වෙත පණිවිඩයක් යොමු කරන්න.",
      chat_now_title: "සෘජුවම කතා කරන්න",
      btn_wa_chat: "💬 WhatsApp පණිවිඩයක් එවන්න",
      btn_phone_call: "📞 074 164 3595 අමතන්න",
      social_channels_title: "අපගේ නිල සමාජ මාධ්‍ය",
      fb_channel_title: "Facebook පිටුව",
      fb_channel_sub: "නිල පිටුව",
      yt_channel_title: "YouTube නාලිකාව",
      yt_channel_sub: "නිල වීඩියෝ",

      // Contact Page
      contact_hero_tag: "අප හා සම්බන්ධ වන්න",
      contact_hero_title: "වේගවත්, නවීන සේවා මධ්‍යස්ථානයක් <br><span class=\"gradient-text-cyan\">එක්ව ගොඩනගමු.</span>",
      contact_direct_tag: "සෘජු ප්‍රවේශය",
      contact_exec_title: "විධායක ඉංජිනේරු සම්බන්ධතාවය",

      // Bike Page Specifics
      bike_tag_flagship: "ප්‍රමුඛතම නිෂ්පාදනය",
      bike_hero_title: "Aqua Dragon <br><span class=\"gradient-text-cyan\">ස්වයංක්‍රීය යතුරුපැදි සෝදන යන්ත්‍රය</span>",
      bike_hero_card_title: "ගතික රොබෝ සේදුම් තාක්ෂණය",
      bike_hero_card_desc: "අංශක 360 ක යතුරුපැදි සමෝච්ඡයන් ඔස්සේ ක්‍රියාත්මක වන ප්‍රබල චලන නොසල් පද්ධතිය",
      bike_tag_anatomy: "තාක්ෂණික සැකැස්ම",
      bike_title_anatomy: "ප්‍රධාන තාක්ෂණය සහ කාර්මික නිමාව",
      bike_tag_seq: "සේදුම් අනුක්‍රමය",
      bike_title_seq: "ස්වයංක්‍රීය ත්‍රිත්ව අදියර සේදුම් ක්‍රියාවලිය",
      bike_tag_matrix: "මාදිලි සංසන්දනය",
      bike_title_matrix: "Aqua Dragon ස්වයංක්‍රීය යතුරුපැදි සෝදන මාදිලි",
      bike_desc_matrix: "ශ්‍රී ලංකාව පුරා බෙදාහැරීමට ඇති වාණිජ මාදිලි 4 සංසන්දනය කරන්න.",
      tbl_spec: "පිරිවිතර",
      tbl_water: "ජල පරිභෝජනය",
      tbl_power: "විදුලි පරිභෝජනය",
      tbl_cycle: "සේදීමේ කාලය",
      tbl_dim: "මානයන් (දිග/පළල/උස)",
      tbl_price: "මිල (වට්ටම් රහිත)",
      tbl_order: "කෙළින්ම ඇණවුම් කරන්න",
      bike_stage_1_title: "අදියර 1: ඩීග්‍රීසර් ඉසීම (Degreaser)",
      bike_stage_1_desc: "එන්ජිම, චේන් සහ යතුරුපැදියේ යටි කොටස්වල තැන්පත් වී ඇති දැඩි තෙල් සහ කුණු ඉවත් කිරීම සඳහා විශේෂිත ඩීග්‍රීසර් ද්‍රාවණය ඉසීම.",
      bike_stage_2_title: "අදියර 2: අධි ඝනත්ව හිම පෙණ (Snow Foam)",
      bike_stage_2_desc: "මුළු යතුරුපැදියම සම්පූර්ණයෙන්ම ඝන හිම පෙණවලින් ආවරණය කර දූවිලි සහ වැලි අංශු මෘදු ලෙස ඉවත් කර සීරීම් ආරක්ෂාව සපයයි.",
      bike_stage_3_title: "අදියර 3: අධි පීඩන රොබෝ සේදීම (High Pressure)",
      bike_stage_3_desc: "අංශක 360 ක සමෝච්ඡ ඔස්සේ ක්‍රියාත්මක වන ප්‍රබල අධි පීඩන ජල ධාරා මගින් සියලුම කුණු සහ ෆෝම් ඉවත් කර දිදුලන නිමාවක් ලබා දෙයි.",

      // Car Page
      car_tag_dev: "ක්‍රියාකාරී සංවර්ධනයේ පවතී",
      car_hero_title: "Aqua Dragon <br><span class=\"gradient-text-cyan\">ස්වයංක්‍රීය කාර් වොෂ් ගැන්ට්‍රිය</span>",
      car_hero_card_title: "වාහනයේ හැඩය හඳුනාගන්නා රොබෝ තාක්ෂණය",
      car_tag_focus: "ඉංජිනේරු අවධානය",
      car_title_detailing: "මෝටර් රථ සඳහා ස්වයංක්‍රීය සේදුම් පද්ධතිය",
      car_tag_rollout: "වාණිජ දියත් කිරීම",
      car_title_deploy: "ඔබේ නගරයේ ප්‍රථම ස්වයංක්‍රීය කාර් වොෂ් මධ්‍යස්ථානය අරඹන්න",

      // Bus Page
      bus_tag_dev: "ක්‍රියාකාරී සංවර්ධනයේ පවතී",
      bus_hero_title: "Aqua Dragon Massive <br><span class=\"gradient-text-cyan\">ස්වයංක්‍රීය බස් රථ සේදුම් පද්ධතිය</span>",
      bus_hero_card_title: "ඩිපෝ සහ ප්‍රවාහන සේවා සඳහා සුපිරි වේගය",
      bus_tag_transit: "වාණිජ ප්‍රවාහනය",
      bus_title_depots: "අධි-ධාරිතා ප්‍රවාහන ඩිපෝ සඳහා විශේෂයෙන් නිමවූ පද්ධතිය",
      bus_tag_tailoring: "පරිශ්‍රයට ගැළපෙන සැලසුම",
      bus_title_layout: "ඔබගේ ස්ථානයේ ඉඩකඩට අනුව සකස් කළ හැකි තාක්ෂණය",

      // Footer
      ft_brand_desc: "බුද්ධිමත් කාර්මික PLC රොබෝ තාක්ෂණය සහ අධි-නිරවද්‍ය ද්‍රව යාන්ත්‍රණයෙන් සමන්විත ශ්‍රී ලංකාවේ ප්‍රමුඛතම ස්වයංක්‍රීය වාහන සේදුම් පද්ධති.",
      ft_col_links: "ප්‍රධාන පිටු",
      ft_col_services: "ඉංජිනේරු සේවාවන්",
      ft_col_hq: "ප්‍රධාන කාර්යාලය",
      ft_link_process: "පියවර 8 ක මිලදී ගැනීමේ ක්‍රමය",
      ft_link_pillars: "ප්‍රධාන කුළුණු 4",
      ft_link_install: "ස්ථාපනය සහ එකලස් කිරීම",
      ft_link_training: "ක්‍රියාකරු පුහුණුව සහ සහතික කිරීම",
      ft_link_support: "පැය 24 පුරා සේවා සහාය",
      ft_link_quote: "නිල මිල ගණන් ලබාගැනීම",
      ft_copy: "© 2026 Riotive Autowash Innovations (Pvt) Ltd. සියලුම හිමිකම් ඇවිරිණි.",
      ft_powered: "Riotive Autowash Innovation ඩිජිටල් විසඳුම් | ශ්‍රී ලංකාවේ සැලසුම් කරන ලදී"
    }
  };

  // Selector-based mapping for high-fidelity fallback across all pages
  const selectorMappings = [
    { sel: '.top-badge', key: 'top_badge' },
    { sel: '.top-bar-left span:last-child', key: 'top_announcement' },
    { sel: '.top-bar-right span:last-child', key: 'top_location' },
    { sel: '.main-nav a[href="index.html"]', key: 'nav_home' },
    { sel: '.main-nav .nav-item-dropdown > a', key: 'nav_machines' },
    { sel: '.dropdown-menu a[href="bike-wash.html"] span:first-child', key: 'nav_bike' },
    { sel: '.dropdown-menu a[href="bike-wash.html"] .dropdown-badge', key: 'badge_ready' },
    { sel: '.dropdown-menu a[href="car-wash.html"] span:first-child', key: 'nav_car' },
    { sel: '.dropdown-menu a[href="car-wash.html"] .dropdown-badge', key: 'badge_soon' },
    { sel: '.dropdown-menu a[href="bus-wash.html"] span:first-child', key: 'nav_bus' },
    { sel: '.dropdown-menu a[href="bus-wash.html"] .dropdown-badge', key: 'badge_fleet' },
    { sel: '.main-nav a[href="#workflow"]', key: 'nav_purchasing' },
    { sel: '.main-nav a[href="about.html"]', key: 'nav_about' },
    { sel: '.main-nav a[href="contact.html"]', key: 'nav_contact' },
    { sel: '.main-nav a[href="#mission-vision"]', key: 'nav_mission_vision' },
    { sel: '.main-nav a[href="#pillars"]', key: 'nav_pillars' },
    { sel: '.main-nav a[href="#leadership"]', key: 'nav_leadership' },
    { sel: '.main-nav a[href="#models"]', key: 'nav_specs' },
    { sel: '.header-actions a[href="#contact"]', key: 'nav_quote_btn' },
    { sel: '.header-actions a[href="contact.html"]', key: 'nav_get_touch' },
    { sel: '.badge-country span', key: 'hero_badge' },
    { sel: '.hero-title', key: 'hero_title' },
    { sel: '.hero-tagline', key: 'hero_tagline' },
    { sel: '.hero-cta-group a[href="#products"]', key: 'hero_btn_explore' },
    { sel: '.hero-cta-group a[href="contact.html"]', key: 'hero_btn_quote' },
    { sel: '.hero-image-overlay h3', key: 'hero_media_title' },
    { sel: '.hero-image-overlay p', key: 'hero_media_desc' },
    { sel: '.products-section .section-tag', key: 'prod_sec_tag' },
    { sel: '.products-section .section-title', key: 'prod_sec_title' },
    { sel: '.products-section .section-desc', key: 'prod_sec_desc' },
    { sel: '.workflow-section .section-tag', key: 'wf_tag' },
    { sel: '.workflow-section .section-title', key: 'wf_title' },
    { sel: '.workflow-section .section-desc', key: 'wf_desc' },
    { sel: '.video-section .section-tag', key: 'vid_tag' },
    { sel: '.video-section .section-title', key: 'vid_title' },
    { sel: '.video-section .section-desc', key: 'vid_desc' },
    { sel: '.youtube-channel-pill span', key: 'vid_sub_yt' },
    { sel: '.about-section .section-tag', key: 'about_tag' },
    { sel: '.about-section .section-title', key: 'about_title' },
    { sel: '.about-section .btn-secondary', key: 'about_btn' },
    { sel: '.contact-section .section-tag', key: 'cont_tag' },
    { sel: '.contact-section .section-title', key: 'cont_title' },
    { sel: '.contact-section .section-desc', key: 'cont_desc' },
    { sel: '.footer-brand p', key: 'ft_brand_desc' },
    { sel: '.footer-bottom > div:first-child', key: 'ft_copy' },
    { sel: '.footer-bottom > div:last-child', key: 'ft_powered' }
  ];

  let currentLang = 'en';

  // Inject Pop-up Modal into DOM
  function injectModal() {
    if (document.getElementById('riotiveLangModal')) return;

    const modalHtml = `
      <div class="lang-modal-backdrop" id="riotiveLangModal" role="dialog" aria-modal="true" aria-labelledby="langModalHeading">
        <div class="lang-modal-box">
          <button class="lang-modal-close" id="btnLangModalClose" aria-label="Close language selector">&times;</button>
          
          <div class="lang-modal-icon">
            <img src="assets/images/riotive-logo.jpg" alt="Riotive Logo">
          </div>

          <h2 class="lang-modal-heading" id="langModalHeading">
            Select Your Language
            <span class="si-title">ඔබේ භාෂාව තෝරන්න</span>
          </h2>

          <p class="lang-modal-subtext">
            Welcome to Riotive Autowash Innovations (Pvt) Ltd.<br>
            Please choose your preferred language to continue / ඉදිරියට යාමට ඔබ කැමති භාෂාව තෝරන්න.
          </p>

          <div class="lang-modal-buttons">
            <button class="lang-btn-card btn-english" id="btnSelectEn" type="button">
              <span class="lang-flag">🇬🇧</span>
              <span class="lang-name">ENGLISH</span>
              <span class="lang-hint">Browse in English</span>
            </button>

            <button class="lang-btn-card btn-sinhala" id="btnSelectSi" type="button">
              <span class="lang-flag">🇱🇰</span>
              <span class="lang-name">සිංහල</span>
              <span class="lang-hint">සිංහලෙන් කියවන්න</span>
            </button>
          </div>

          <div class="lang-modal-footer-note">
            <span>💡 You can switch language anytime using the header toggle • ඔබට ඉහළ මෙනුවෙන් ඕනෑම වේලාවක භාෂාව වෙනස් කළ හැක</span>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);

    // Attach Click Events to Modal Buttons
    document.getElementById('btnSelectEn')?.addEventListener('click', () => {
      setLanguage('en');
      hideModal();
    });

    document.getElementById('btnSelectSi')?.addEventListener('click', () => {
      setLanguage('si');
      hideModal();
    });

    document.getElementById('btnLangModalClose')?.addEventListener('click', () => {
      hideModal();
    });

    const backdrop = document.getElementById('riotiveLangModal');
    backdrop?.addEventListener('click', (e) => {
      if (e.target === backdrop) hideModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && backdrop?.classList.contains('active')) {
        hideModal();
      }
    });
  }

  // Inject Header Language Toggle Pill
  function injectHeaderSwitcher() {
    if (document.getElementById('headerLangToggle')) return;

    const switcherHtml = `
      <button class="header-lang-btn" id="headerLangToggle" type="button" title="Change Language / භාෂාව තෝරන්න">
        <span class="globe-icon">🌐</span>
        <span class="lang-text" id="headerLangCurrent">සිංහල / EN</span>
      </button>
    `;

    const headerActions = document.querySelector('.header-actions');
    if (headerActions) {
      const mobileToggle = document.getElementById('mobileToggle');
      if (mobileToggle) {
        headerActions.insertBefore(createElementFromHTML(switcherHtml), mobileToggle);
      } else {
        headerActions.insertAdjacentHTML('beforeend', switcherHtml);
      }
    }

    // Attach click to open language selection modal
    document.getElementById('headerLangToggle')?.addEventListener('click', () => {
      showModal();
    });
  }

  function createElementFromHTML(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
  }

  // Show Language Selection Modal
  function showModal() {
    const modal = document.getElementById('riotiveLangModal');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  // Hide Language Selection Modal
  function hideModal() {
    const modal = document.getElementById('riotiveLangModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      sessionStorage.setItem(POPUP_SEEN_KEY, 'true');
    }
  }

  // Apply Language
  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    // Persist choice
    localStorage.setItem(STORAGE_KEY, lang);
    sessionStorage.setItem(POPUP_SEEN_KEY, 'true');
    document.documentElement.lang = lang;

    const dict = translations[lang];

    // 1. Update elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (dict[key].includes('<') && dict[key].includes('>')) {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // 2. Update via selector mappings (for unannotated elements)
    selectorMappings.forEach(item => {
      const el = document.querySelector(item.sel);
      if (el && dict[item.key]) {
        if (dict[item.key].includes('<') && dict[item.key].includes('>')) {
          el.innerHTML = dict[item.key];
        } else {
          el.textContent = dict[item.key];
        }
      }
    });

    // 3. Update placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key]) el.setAttribute('placeholder', dict[key]);
    });

    // 4. Update Header Switcher Text
    const currentIndicator = document.getElementById('headerLangCurrent');
    if (currentIndicator) {
      currentIndicator.textContent = lang === 'si' ? 'සිංහල 🇱🇰 (Change)' : 'English 🇬🇧 (වෙනස්)';
    }

    // 5. Update Wash Cycle visualizer if present on page
    updateCycleVisualizer(lang);

    // Dispatch event
    window.dispatchEvent(new CustomEvent('riotiveLanguageChanged', { detail: { lang } }));
  }

  function updateCycleVisualizer(lang) {
    const cycleTitle = document.getElementById('cycleStageTitle');
    const cycleDesc = document.getElementById('cycleStageDesc');
    const activeTab = document.querySelector('.cycle-step-tab.active');
    if (!activeTab || !cycleTitle || !cycleDesc) return;

    const stepKey = activeTab.getAttribute('data-step') || 'degreaser';
    const dict = translations[lang];
    if (stepKey === 'degreaser' && dict.bike_stage_1_title) {
      cycleTitle.textContent = dict.bike_stage_1_title;
      cycleDesc.textContent = dict.bike_stage_1_desc;
    } else if (stepKey === 'snowfoam' && dict.bike_stage_2_title) {
      cycleTitle.textContent = dict.bike_stage_2_title;
      cycleDesc.textContent = dict.bike_stage_2_desc;
    } else if (stepKey === 'highpressure' && dict.bike_stage_3_title) {
      cycleTitle.textContent = dict.bike_stage_3_title;
      cycleDesc.textContent = dict.bike_stage_3_desc;
    }
  }

  // Initialize
  function init() {
    injectModal();
    injectHeaderSwitcher();

    const savedLang = localStorage.getItem(STORAGE_KEY);
    const hasSeenPopupInSession = sessionStorage.getItem(POPUP_SEEN_KEY);

    if (savedLang) {
      setLanguage(savedLang);
    } else {
      setLanguage('en');
    }

    // "web ekata siya gamn pop pum massage ekak enna oni"
    // Trigger pop-up on arrival if not yet acknowledged in this session
    if (!hasSeenPopupInSession) {
      setTimeout(() => {
        showModal();
      }, 400);
    }
  }

  return {
    init,
    setLanguage,
    showModal,
    hideModal,
    getCurrentLanguage: () => currentLang
  };
})();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', RiotiveI18n.init);
} else {
  RiotiveI18n.init();
}
