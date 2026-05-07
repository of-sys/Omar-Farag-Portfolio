import React, { Children, lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Linkedin } from 'lucide-react';
// Animation variants for consistent editorial motion
const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
const staggerContainer = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};
const revealText = {
  hidden: {
    y: '100%'
  },
  visible: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
export function Portfolio() {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-[var(--bg-paper)] text-[var(--text-primary)] selection:bg-[var(--color-accent)] selection:text-white">
      {/* Navigation / Header - Minimal */}
      <nav className="fixed top-0 left-0 w-full p-6 md:p-12 flex justify-between items-start z-50 mix-blend-difference text-[var(--text-primary)] pointer-events-none">
        <span className="text-sm tracking-widest uppercase font-medium pointer-events-auto">
          Data Analyst
        </span>
        <a
          href="https://www.linkedin.com/in/omar-hassan-8344a5342"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm tracking-widest uppercase font-medium hover:text-[var(--color-accent)] transition-colors pointer-events-auto">
          
          Let's Connect
        </a>
      </nav>

      <main className="w-full max-w-[1600px] mx-auto px-6 md:px-12 pt-32 md:pt-48 pb-24">
        {/* HERO SECTION */}
        <section className="min-h-[70vh] flex flex-col justify-center mb-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative">
            
            <div className="overflow-hidden pb-4 md:pb-6">
              <motion.h1
                variants={revealText}
                className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[1.15] font-medium tracking-tight text-[var(--text-primary)]">
                
                Omar
              </motion.h1>
            </div>
            <div className="overflow-hidden pb-4 md:pb-6 md:ml-[10vw]">
              <motion.h1
                variants={revealText}
                className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[1.15] font-medium tracking-tight text-[var(--text-primary)] italic">
                
                Farag
              </motion.h1>
            </div>

            {/* Prominent Position Title */}
            <motion.div variants={fadeInUp} className="mt-8 md:mt-12">
              <span className="inline-block px-4 py-2 bg-[var(--color-accent)] text-white text-lg md:text-xl font-semibold uppercase tracking-widest">
                Data Analyst
              </span>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 md:mt-12 md:ml-auto md:w-1/2 lg:w-1/3 border-t border-[var(--text-primary)] pt-6">
              
              <p className="text-lg md:text-xl font-light leading-relaxed text-[var(--text-secondary)]">
                Physics graduate transforming complex datasets into actionable
                insights that drive informed decisions.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* PULL QUOTE */}
        <section className="py-24 md:py-48 border-t border-[var(--text-primary)]/10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: '-10%'
            }}
            variants={fadeInUp}
            className="max-w-5xl mx-auto text-center md:text-left relative">
            
            <span className="absolute -top-12 -left-8 md:-left-16 text-9xl font-serif text-[var(--color-accent)] opacity-20">
              "
            </span>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight md:leading-tight">
              Driven by curiosity, powered by strategy — extracting{' '}
              <span className="italic text-[var(--color-accent)]">value</span>{' '}
              from our new oil: data.
            </h2>
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section className="py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
              <motion.span
                initial={{
                  opacity: 0
                }}
                whileInView={{
                  opacity: 1
                }}
                viewport={{
                  once: true
                }}
                className="text-[var(--color-accent)] text-sm font-medium tracking-widest uppercase sticky top-32">
                
                01. About
              </motion.span>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true
                }}
                variants={staggerContainer}
                className="space-y-8">
                
                <motion.p
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-serif leading-relaxed">
                  
                  I believe that data without context is just noise. My
                  scientific training taught me to extract meaningful insights
                  from complexity.
                </motion.p>
                <motion.div
                  variants={fadeInUp}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[var(--text-secondary)] leading-relaxed">
                  
                  <p>
                    I graduated from the Faculty of Science at Ain-Shams
                    University with a Physics major in 2022. During my studies,
                    I conducted numerous scientific experiments, handling vast
                    amounts of data to extract insights that support theoretical
                    frameworks.
                  </p>
                  <p>
                    This foundation, combined with my Data Analytics diploma
                    from DEPI (Ministry of Education and Information
                    Technology), has equipped me with a unique blend of
                    scientific rigor and analytical expertise. I'm passionate
                    about helping individuals and businesses make informed,
                    data-driven decisions.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* EXPERTISE SECTION */}
        <section className="py-24 md:py-32 border-t border-[var(--text-primary)]/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
              <motion.span
                initial={{
                  opacity: 0
                }}
                whileInView={{
                  opacity: 1
                }}
                viewport={{
                  once: true
                }}
                className="text-[var(--color-accent)] text-sm font-medium tracking-widest uppercase sticky top-32">
                
                02. Expertise
              </motion.span>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true
                }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                
                <div>
                  <motion.h3
                    variants={fadeInUp}
                    className="font-serif text-2xl mb-6 italic">
                    
                    Core Skills
                  </motion.h3>
                  <ul className="space-y-4">
                    {[
                    'Statistical Analysis',
                    'Data Visualization',
                    'Exploratory Data Analysis',
                    'Data Cleaning & Wrangling',
                    'Business Intelligence'].
                    map((item) =>
                    <motion.li
                      key={item}
                      variants={fadeInUp}
                      className="flex items-center text-[var(--text-primary)] border-b border-[var(--text-primary)]/10 pb-3">
                      
                        <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full mr-4"></span>
                        {item}
                      </motion.li>
                    )}
                  </ul>
                </div>
                <div>
                  <motion.h3
                    variants={fadeInUp}
                    className="font-serif text-2xl mb-6 italic">
                    
                    Technical Stack
                  </motion.h3>
                  <ul className="space-y-4">
                    {[
                    'Python (Pandas, NumPy)',
                    'Excel & Spreadsheets',
                    'Statistics & Probability',
                    'SQL & Databases',
                    'Data Visualization Tools'].
                    map((item) =>
                    <motion.li
                      key={item}
                      variants={fadeInUp}
                      className="flex items-center text-[var(--text-primary)] border-b border-[var(--text-primary)]/10 pb-3">
                      
                        <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full mr-4"></span>
                        {item}
                      </motion.li>
                    )}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="py-24 md:py-32 border-t border-[var(--text-primary)]/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
              <motion.span
                initial={{
                  opacity: 0
                }}
                whileInView={{
                  opacity: 1
                }}
                viewport={{
                  once: true
                }}
                className="text-[var(--color-accent)] text-sm font-medium tracking-widest uppercase sticky top-32">
                
                03. Projects
              </motion.span>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  margin: '-10%'
                }}
                variants={staggerContainer}
                className="space-y-12">
                
                {[
                {
                  number: '01',
                  title: 'Sales Data Analysis Dashboard',
                  description:
                  'Interactive Excel dashboard analyzing sales performance across regions, categories, and customer segments. Features KPI cards, dynamic slicers, and charts for sales trends, top states, and regional profitability.',
                  tags: [
                  'Pivot Tables',
                  'Power Pivot',
                  'Slicers',
                  'Data Viz'],

                  image: "/image_for_freelancer_2.jpg",

                  imageAlt:
                  'Sales Dashboard with KPI cards for total customers, profit, products, and sales'
                },
                {
                  number: '02',
                  title: 'Power Query Data Cleaning & Automation',
                  description:
                  'Automated ETL workflow built with Power Query to import, clean, merge, and transform multiple CSV datasets. Handled duplicates, missing values, and type inconsistencies, with calculated columns for Total Sales and Profit Margin.',
                  tags: ['Power Query', 'ETL', 'Data Cleaning', 'Automation'],
                  image: "/image.jpg",

                  imageAlt:
                  'Cleaned hierarchical pivot table breakdown by region, state, and category'
                },
                {
                  number: '03',
                  title: 'Power Pivot Profitability Analysis',
                  description:
                  'Relational data model built with Power Pivot and DAX measures to analyze profitability across regions, products, and segments. Identified top 5 profitable products and regional contribution to overall margin.',
                  tags: ['Power Pivot', 'DAX', 'Data Model', 'BI'],
                  image: "/Picture1.jpg",

                  imageAlt:
                  'Top 5 profitable products ranking and regional profitability percentage analysis'
                },
                {
                  number: '04',
                  title: 'Customer Trends & Visualization',
                  description:
                  'Suite of analytical visualizations exploring sales trends, customer behavior, and demographic distributions. Includes trendlines for forecasting and regional performance comparisons.',
                  tags: ['Charts', 'Trend Analysis', 'Forecasting'],
                  image: "/Image_for_freelancer.jpg",

                  imageAlt:
                  'Sales dashboard 2014-2017 with sales over time, top 5 cities pie chart, and revenue by category'
                },
                {
                  number: '05',
                  title: 'Mobile Phones Sales Dashboard',
                  description:
                  'Market analytics dashboard for the mobile phone industry — tracks sales volume, brand market share, price distribution, and product ratings. Compared original vs. discounted prices and tiered products by price level.',
                  tags: ['Dashboard', 'KPI Reporting', 'Market Analysis'],
                  image: null,
                  imageAlt: ''
                }].
                map((project) =>
                <motion.article
                  key={project.number}
                  variants={fadeInUp}
                  className="border-b border-[var(--text-primary)]/10 pb-12 last:border-b-0">
                  
                    <div className="flex items-baseline gap-6 mb-4">
                      <span className="font-serif italic text-[var(--color-accent)] text-2xl md:text-3xl">
                        {project.number}
                      </span>
                      <h3 className="font-serif text-2xl md:text-4xl leading-tight">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed text-base md:text-lg mb-6 md:ml-14 max-w-3xl">
                      {project.description}
                    </p>
                    {project.image &&
                  <div className="md:ml-14 mb-6 overflow-hidden border border-[var(--text-primary)]/10 bg-white">
                        <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                      className="w-full h-auto block" />
                    
                      </div>
                  }
                    <div className="flex flex-wrap gap-2 md:ml-14">
                      {project.tags.map((tag) =>
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-widest border border-[var(--text-primary)]/20 px-3 py-1.5 text-[var(--text-primary)]">
                      
                          {tag}
                        </span>
                    )}
                    </div>
                  </motion.article>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section className="py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
              <motion.span
                initial={{
                  opacity: 0
                }}
                whileInView={{
                  opacity: 1
                }}
                viewport={{
                  once: true
                }}
                className="text-[var(--color-accent)] text-sm font-medium tracking-widest uppercase sticky top-32">
                
                04. Education
              </motion.span>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true
                }}
                variants={staggerContainer}
                className="space-y-12">
                
                <motion.div
                  variants={fadeInUp}
                  className="border-b border-[var(--text-primary)]/10 pb-8">
                  
                  <span className="text-sm text-[var(--text-secondary)] uppercase tracking-wider">
                    2022
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl mt-2 mb-3">
                    Bachelor of Science — Physics
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    Faculty of Science, Ain-Shams University
                  </p>
                </motion.div>
                <motion.div
                  variants={fadeInUp}
                  className="border-b border-[var(--text-primary)]/10 pb-8">
                  
                  <span className="text-sm text-[var(--text-secondary)] uppercase tracking-wider">
                    Professional Certificate
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl mt-2 mb-3">
                    Data Analytics Diploma
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    DEPI — Ministry of Education and Information Technology
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-24 md:py-32 border-t border-[var(--text-primary)]/10 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <h2 className="font-serif text-5xl md:text-6xl mb-8">
                Let's start a conversation.
              </h2>
            </div>
            <div className="md:col-span-5 md:col-start-7 flex flex-col justify-between">
              <div>
                <p className="text-[var(--text-secondary)] mb-8 max-w-sm">
                  Open to opportunities in data analytics, business
                  intelligence, and strategic consulting. Let's connect and
                  explore how data can drive your decisions.
                </p>
                <a
                  href="https://www.linkedin.com/in/omar-hassan-8344a5342"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xl font-serif italic hover:text-[var(--color-accent)] transition-colors group">
                  
                  <Linkedin className="mr-3 w-6 h-6" />
                  Connect on LinkedIn
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-24 flex justify-between items-end text-xs text-[var(--text-secondary)] uppercase tracking-widest">
            <span>Cairo, Egypt</span>
            <span>&copy; 2024 Omar Farag</span>
          </div>
        </footer>
      </main>
    </div>);

}