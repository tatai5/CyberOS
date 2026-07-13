import type {
  ResearchItem,
  Project,
  Writeup,
  Tool,
  Skill,
  TimelineEntry,
} from '@/lib/types';

export const RESEARCH: ResearchItem[] = [
  {
    id: 'r1',
    slug: 'advanced-xss-techniques-in-modern-web-apps',
    title: 'Advanced XSS Techniques in Modern Web Applications',
    summary:
      'A deep dive into filter bypasses, DOM-based XSS, mutation engines, and CSP evasion strategies targeting modern JavaScript frameworks.',
    category: 'Web Security',
    tags: ['xss', 'dom', 'csp', 'bypass'],
    difficulty: 'Advanced',
    readingTime: 18,
    publishedAt: '2025-11-15',
    updatedAt: '2026-01-08',
    views: 4820,
    featured: true,
    content: `# Advanced XSS Techniques in Modern Web Applications

## Executive Summary

Cross-Site Scripting remains one of the most prevalent and impactful vulnerabilities in modern web applications. This research explores advanced techniques for identifying and exploiting XSS vulnerabilities in applications built with modern JavaScript frameworks.

## Key Findings

- DOM-based XSS vectors bypass traditional server-side WAF rules
- Mutation engines can circumvent sanitization in certain browsers
- CSP nonce reuse and injection points allow policy bypass
- Framework-specific sinks exist in React, Vue, and Angular

## Methodology

We systematically tested 50 production applications using both manual analysis and automated tooling, focusing on DOM sinks, template injection, and CSP bypass techniques.

## Conclusion

Modern frameworks reduce but do not eliminate XSS risk. Defense-in-depth with CSP, sanitization, and developer education remains essential.`,
  },
  {
    id: 'r2',
    slug: 'osint-recon-framework-for-bug-bounty',
    title: 'OSINT Reconnaissance Framework for Bug Bounty Hunters',
    summary:
      'A structured approach to open-source intelligence gathering for attack surface discovery, subdomain enumeration, and target profiling.',
    category: 'OSINT',
    tags: ['osint', 'recon', 'subdomains', 'bug-bounty'],
    difficulty: 'Intermediate',
    readingTime: 14,
    publishedAt: '2025-09-22',
    updatedAt: '2025-12-10',
    views: 3210,
    featured: true,
    content: `# OSINT Reconnaissance Framework for Bug Bounty Hunters

## Executive Summary

Effective reconnaissance is the foundation of successful bug bounty hunting. This research presents a structured OSINT framework for discovering attack surfaces.

## Framework Components

1. **Subdomain Enumeration** — Passive and active techniques
2. **Technology Fingerprinting** — Identifying frameworks and versions
3. **Historical Analysis** — Wayback Machine and certificate transparency
4. **Social Engineering Surface** — Employee roles and tech stacks

## Conclusion

A systematic approach to OSINT dramatically increases the attack surface discoverable per target.`,
  },
  {
    id: 'r3',
    slug: 'cloud-misconfiguration-attack-surfaces',
    title: 'Cloud Misconfiguration Attack Surfaces in AWS and Azure',
    summary:
      'Analysis of common cloud misconfigurations that lead to data exposure, privilege escalation, and lateral movement across cloud environments.',
    category: 'Cloud Security',
    tags: ['aws', 'azure', 'cloud', 'misconfiguration', 'iam'],
    difficulty: 'Advanced',
    readingTime: 22,
    publishedAt: '2025-07-30',
    updatedAt: '2025-11-20',
    views: 5640,
    featured: true,
    content: `# Cloud Misconfiguration Attack Surfaces in AWS and Azure

## Executive Summary

Cloud misconfigurations are the leading cause of cloud security incidents. This research catalogs the most critical misconfiguration patterns.

## Key Findings

- Overly permissive IAM roles enable lateral movement
- Public S3 and Blob storage remain a persistent issue
- Lambda and Function Apps can be abused for privilege escalation
- Network segmentation is frequently misconfigured

## Conclusion

Continuous configuration monitoring and least-privilege IAM are the most effective mitigations.`,
  },
  {
    id: 'r4',
    slug: 'reverse-engineering-malware-communication-protocols',
    title: 'Reverse Engineering Malware Communication Protocols',
    summary:
      'Techniques for analyzing C2 protocols, decrypting traffic, and understanding command structures in modern malware samples.',
    category: 'Reverse Engineering',
    tags: ['malware', 'reverse-engineering', 'c2', 'protocol'],
    difficulty: 'Expert',
    readingTime: 25,
    publishedAt: '2025-05-12',
    updatedAt: '2025-10-05',
    views: 2980,
    content: `# Reverse Engineering Malware Communication Protocols

## Executive Summary

Understanding C2 protocols is critical for threat hunting and incident response.

## Approach

Static analysis with Ghidra, dynamic analysis with debuggers, and traffic interception with custom proxies.`,
  },
  {
    id: 'r5',
    slug: 'network-segmentation-strategies-for-enterprise',
    title: 'Network Segmentation Strategies for Enterprise Security',
    summary:
      'Practical approaches to network segmentation using VLANs, firewalls, and zero-trust principles to contain lateral movement.',
    category: 'Network Security',
    tags: ['network', 'segmentation', 'vlan', 'zero-trust'],
    difficulty: 'Intermediate',
    readingTime: 16,
    publishedAt: '2025-03-18',
    updatedAt: '2025-08-22',
    views: 4120,
    content: `# Network Segmentation Strategies for Enterprise Security

## Executive Summary

Network segmentation limits the blast radius of security incidents. This research covers practical segmentation architectures.

## Architecture Models

- Macro segmentation by business unit
- Micro segmentation at the workload level
- Zero Trust Network Access (ZTNA) integration`,
  },
  {
    id: 'r6',
    slug: 'ai-powered-adversarial-attacks-on-ml-models',
    title: 'AI-Powered Adversarial Attacks on Machine Learning Models',
    summary:
      'Exploring adversarial examples, model poisoning, and evasion attacks against ML systems deployed in security products.',
    category: 'AI Security',
    tags: ['ai', 'ml', 'adversarial', 'evasion'],
    difficulty: 'Expert',
    readingTime: 20,
    publishedAt: '2025-01-10',
    updatedAt: '2025-06-15',
    views: 3870,
    content: `# AI-Powered Adversarial Attacks on Machine Learning Models

## Executive Summary

Machine learning models in security products are themselves attack targets. This research explores adversarial techniques.

## Attack Vectors

- Evasion attacks via perturbation
- Model poisoning through training data
- Model extraction attacks`,
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    slug: 'cybersec-toolkit',
    title: 'CyberSec Toolkit',
    summary:
      'A comprehensive CLI toolkit for reconnaissance, scanning, and vulnerability assessment with 30+ integrated tools.',
    description:
      'An all-in-one cybersecurity toolkit that integrates reconnaissance, scanning, exploitation, and reporting into a single CLI interface. Built with extensibility and automation in mind.',
    techStack: ['Python', 'Docker', 'Go', 'SQLite'],
    category: 'Security',
    status: 'active',
    featured: true,
    githubUrl: 'https://github.com',
    liveUrl: undefined,
    tags: ['cli', 'automation', 'recon', 'scanning'],
    publishedAt: '2025-10-01',
    updatedAt: '2026-01-05',
    content: `# CyberSec Toolkit

## Overview

A modular CLI framework for security professionals.

## Problem Statement

Security engineers juggle dozens of tools with inconsistent interfaces.

## Solution

A unified CLI that orchestrates tools, normalizes output, and generates reports.

## Architecture

Plugin-based architecture with a core orchestration engine.

## Features

- 30+ integrated tools
- Automated reporting
- Docker containerized execution
- REST API for CI/CD integration

## Lessons Learned

Plugin isolation is critical for stability and security.`,
  },
  {
    id: 'p2',
    slug: 'threat-intel-platform',
    title: 'Threat Intelligence Platform',
    summary:
      'Real-time threat intelligence aggregation and correlation platform with IOC enrichment and automated response.',
    description:
      'A threat intelligence platform that aggregates IOCs from multiple feeds, correlates them with internal events, and triggers automated response playbooks.',
    techStack: ['TypeScript', 'Next.js', 'PostgreSQL', 'Redis', 'Kafka'],
    category: 'Security',
    status: 'active',
    featured: true,
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    tags: ['threat-intel', 'ioc', 'automation', 'siem'],
    publishedAt: '2025-08-15',
    updatedAt: '2025-12-20',
    content: `# Threat Intelligence Platform

## Overview

Aggregates and correlates threat intelligence from multiple sources.

## Architecture

Event-driven architecture using Kafka for real-time IOC processing.`,
  },
  {
    id: 'p3',
    slug: 'osint-dashboard',
    title: 'OSINT Dashboard',
    summary:
      'A visual OSINT dashboard for aggregating, analyzing, and visualizing open-source intelligence data.',
    description:
      'An interactive dashboard for OSINT researchers that aggregates data from social media, public records, and network scanning into a unified visual interface.',
    techStack: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    category: 'OSINT',
    status: 'maintained',
    featured: true,
    githubUrl: 'https://github.com',
    tags: ['osint', 'visualization', 'dashboard'],
    publishedAt: '2025-06-10',
    updatedAt: '2025-11-01',
    content: `# OSINT Dashboard

## Overview

A visual platform for OSINT aggregation and analysis.`,
  },
  {
    id: 'p4',
    slug: 'secure-code-scanner',
    title: 'Secure Code Scanner',
    summary:
      'Static analysis tool for detecting security vulnerabilities in source code with custom rule engine and CI/CD integration.',
    description:
      'A SAST tool that scans source code for security vulnerabilities using a custom rule engine. Supports 15+ languages and integrates with CI/CD pipelines.',
    techStack: ['Rust', 'WASM', 'TypeScript'],
    category: 'Security',
    status: 'active',
    githubUrl: 'https://github.com',
    tags: ['sast', 'static-analysis', 'ci-cd'],
    publishedAt: '2025-04-20',
    updatedAt: '2025-10-30',
    content: `# Secure Code Scanner

## Overview

A high-performance static analysis tool for security vulnerabilities.`,
  },
  {
    id: 'p5',
    slug: 'network-traffic-analyzer',
    title: 'Network Traffic Analyzer',
    summary:
      'Deep packet inspection and anomaly detection tool for identifying suspicious network activity in real-time.',
    description:
      'A network traffic analysis tool that performs deep packet inspection, protocol analysis, and anomaly detection using statistical models.',
    techStack: ['Go', 'Python', 'Elasticsearch', 'Grafana'],
    category: 'Network',
    status: 'maintained',
    githubUrl: 'https://github.com',
    tags: ['network', 'dpi', 'anomaly-detection'],
    publishedAt: '2025-02-14',
    updatedAt: '2025-09-18',
    content: `# Network Traffic Analyzer

## Overview

Real-time network traffic analysis with anomaly detection.`,
  },
  {
    id: 'p6',
    slug: 'api-security-gateway',
    title: 'API Security Gateway',
    summary:
      'A security gateway for APIs with rate limiting, schema validation, JWT verification, and OWASP API Top 10 protection.',
    description:
      'An API security gateway that sits in front of microservices, providing authentication, authorization, rate limiting, schema validation, and threat detection.',
    techStack: ['Node.js', 'Redis', 'Docker', 'Kubernetes'],
    category: 'Web',
    status: 'active',
    githubUrl: 'https://github.com',
    tags: ['api', 'gateway', 'owasp', 'rate-limiting'],
    publishedAt: '2024-12-05',
    updatedAt: '2025-08-12',
    content: `# API Security Gateway

## Overview

A protective gateway for API endpoints with OWASP API Top 10 coverage.`,
  },
];

export const WRITEUPS: Writeup[] = [
  {
    id: 'w1',
    slug: 'idor-exploitation-in-graphql-apis',
    title: 'IDOR Exploitation in GraphQL APIs',
    summary:
      'How to identify and exploit Insecure Direct Object Reference vulnerabilities in GraphQL endpoints with real-world examples.',
    category: 'Web Security',
    tags: ['idor', 'graphql', 'api', 'authorization'],
    difficulty: 'Intermediate',
    readingTime: 12,
    publishedAt: '2026-01-10',
    updatedAt: '2026-01-10',
    views: 1840,
    content: `# IDOR Exploitation in GraphQL APIs

## Executive Summary

GraphQL APIs often introduce IDOR vulnerabilities due to flexible query structures and insufficient authorization checks.

## Identifying IDOR in GraphQL

1. Enumerate all queries and mutations
2. Test object references with different user contexts
3. Use batch queries to enumerate efficiently

## Exploitation

\`\`\`graphql
query {
  user(id: 1) {
    id
    email
    role
    apiKey
  }
}
\`\`\`

## Remediation

Implement object-level authorization checks on every resolver.`,
  },
  {
    id: 'w2',
    slug: 'ssrf-to-cloud-metadata-escape',
    title: 'SSRF to Cloud Metadata Escape',
    summary:
      'Exploiting Server-Side Request Forgery to access cloud metadata services and extract credentials in AWS, GCP, and Azure.',
    category: 'Web Security',
    tags: ['ssrf', 'cloud', 'metadata', 'aws', 'gcp'],
    difficulty: 'Advanced',
    readingTime: 15,
    publishedAt: '2025-12-20',
    updatedAt: '2026-01-02',
    views: 2540,
    content: `# SSRF to Cloud Metadata Escape

## Executive Summary

SSRF vulnerabilities can be escalated to full cloud account compromise via metadata services.

## AWS Metadata

\`\`\`
http://169.254.169.254/latest/meta-data/iam/security-credentials/
\`\`\`

## Mitigation

Use IMDSv2, blocklist metadata IPs, and enforce SSRF protections.`,
  },
  {
    id: 'w3',
    slug: 'jwt-attack-vectors-and-mitigations',
    title: 'JWT Attack Vectors and Mitigations',
    summary:
      'Comprehensive analysis of JSON Web Token vulnerabilities including algorithm confusion, key injection, and claim manipulation.',
    category: 'Web Security',
    tags: ['jwt', 'authentication', 'authorization', 'token'],
    difficulty: 'Intermediate',
    readingTime: 14,
    publishedAt: '2025-11-08',
    updatedAt: '2025-12-15',
    views: 3120,
    content: `# JWT Attack Vectors and Mitigations

## Executive Summary

JWTs are widely used but frequently misconfigured.

## Attack Vectors

- Algorithm confusion (none vs HS256 vs RS256)
- Key injection via jku/jwk headers
- Claim manipulation
- Token replay

## Mitigations

Enforce algorithm, validate signatures, use short expiry.`,
  },
  {
    id: 'w4',
    slug: 'reverse-engineering-a-packed-ransomware',
    title: 'Reverse Engineering a Packed Ransomware Sample',
    summary:
      'Step-by-step analysis of a UPX-packed ransomware sample including unpacking, behavior analysis, and IOC extraction.',
    category: 'Reverse Engineering',
    tags: ['malware', 'ransomware', 'upx', 'unpacking'],
    difficulty: 'Advanced',
    readingTime: 20,
    publishedAt: '2025-10-15',
    updatedAt: '2025-11-30',
    views: 1980,
    content: `# Reverse Engineering a Packed Ransomware Sample

## Executive Summary

A walkthrough of unpacking and analyzing a packed ransomware binary.

## Steps

1. Identify the packer (UPX)
2. Unpack the binary
3. Analyze the unpacked payload
4. Extract IOCs`,
  },
  {
    id: 'w5',
    slug: 'active-directory-privilege-escalation',
    title: 'Active Directory Privilege Escalation Techniques',
    summary:
      'Common AD privilege escalation paths including Kerberoasting, ACL abuse, and constrained delegation attacks.',
    category: 'Network Security',
    tags: ['active-directory', 'kerberos', 'windows', 'privilege-escalation'],
    difficulty: 'Advanced',
    readingTime: 18,
    publishedAt: '2025-09-05',
    updatedAt: '2025-11-12',
    views: 4260,
    content: `# Active Directory Privilege Escalation Techniques

## Executive Summary

Active Directory environments present numerous privilege escalation paths.

## Techniques

- Kerberoasting
- AS-REP Roasting
- ACL abuse (GenericAll, WriteDacl)
- Constrained delegation abuse`,
  },
  {
    id: 'w6',
    slug: 'subdomain-takeover-detection-guide',
    title: 'Subdomain Takeover Detection Guide',
    summary:
      'A practical guide to identifying and exploiting subdomain takeover vulnerabilities across 20+ cloud providers.',
    category: 'Web Security',
    tags: ['subdomain', 'takeover', 'dns', 'cloud'],
    difficulty: 'Beginner',
    readingTime: 10,
    publishedAt: '2025-08-01',
    updatedAt: '2025-10-20',
    views: 5320,
    content: `# Subdomain Takeover Detection Guide

## Executive Summary

Subdomain takeover occurs when a DNS record points to a deprovisioned resource.

## Detection

1. Enumerate subdomains
2. Check for CNAME records pointing to cloud services
3. Verify resource availability

## Fingerprinting

Each provider has unique response signatures.`,
  },
];

export const TOOLS: Tool[] = [
  {
    id: 't1',
    slug: 'burp-suite',
    name: 'Burp Suite',
    description:
      'The industry standard web application security testing platform with proxy, scanner, and intrusion tools.',
    category: 'Web Security',
    platform: ['Cross-platform'],
    license: 'Commercial',
    websiteUrl: 'https://portswigger.net/burp',
    documentationUrl: 'https://portswigger.net/burp/documentation',
    featured: true,
  },
  {
    id: 't2',
    slug: 'nmap',
    name: 'Nmap',
    description:
      'The network mapper. Free and open source utility for network discovery and security auditing.',
    category: 'Network Security',
    platform: ['Cross-platform'],
    license: 'Open Source',
    websiteUrl: 'https://nmap.org',
    documentationUrl: 'https://nmap.org/docs.html',
    featured: true,
  },
  {
    id: 't3',
    slug: 'metasploit',
    name: 'Metasploit Framework',
    description:
      'The world most used penetration testing framework for developing and executing exploit code.',
    category: 'Web Security',
    platform: ['Linux', 'macOS', 'Windows'],
    license: 'Open Source',
    websiteUrl: 'https://www.metasploit.com',
    documentationUrl: 'https://docs.metasploit.com',
    featured: true,
  },
  {
    id: 't4',
    slug: 'wireshark',
    name: 'Wireshark',
    description:
      'The world foremost and widely-used network protocol analyzer for deep packet inspection.',
    category: 'Network Security',
    platform: ['Cross-platform'],
    license: 'Open Source',
    websiteUrl: 'https://www.wireshark.org',
    documentationUrl: 'https://www.wireshark.org/docs',
    featured: true,
  },
  {
    id: 't5',
    slug: 'ghidra',
    name: 'Ghidra',
    description:
      'A software reverse engineering suite of tools from the NSA for analyzing compiled code.',
    category: 'Reverse Engineering',
    platform: ['Cross-platform'],
    license: 'Open Source',
    websiteUrl: 'https://ghidra-sre.org',
    documentationUrl: 'https://ghidra-sre.org/Documentation',
    featured: true,
  },
  {
    id: 't6',
    slug: 'theharvester',
    name: 'theHarvester',
    description:
      'A tool for gathering emails, subdomains, hosts, employee names and open ports from different public sources.',
    category: 'OSINT',
    platform: ['Linux', 'macOS'],
    license: 'Open Source',
    websiteUrl: 'https://github.com/laramies/theHarvester',
    documentationUrl: 'https://github.com/laramies/theHarvester/wiki',
  },
  {
    id: 't7',
    slug: 'maltego',
    name: 'Maltego',
    description:
      'A comprehensive tool for graphical link analysis and OSINT gathering with transform modules.',
    category: 'OSINT',
    platform: ['Cross-platform'],
    license: 'Commercial',
    websiteUrl: 'https://www.maltego.com',
    documentationUrl: 'https://docs.maltego.com',
  },
  {
    id: 't8',
    slug: 'john-the-ripper',
    name: 'John the Ripper',
    description:
      'An Open Source password security auditing and password recovery tool with multi-platform support.',
    category: 'Web Security',
    platform: ['Linux', 'macOS', 'Windows'],
    license: 'Open Source',
    websiteUrl: 'https://www.openwall.com/john/',
    documentationUrl: 'https://www.openwall.com/john/doc/',
  },
  {
    id: 't9',
    slug: 'sqlmap',
    name: 'SQLMap',
    description:
      'Automatic SQL injection and database takeover tool supporting a wide range of database engines.',
    category: 'Web Security',
    platform: ['Linux', 'macOS', 'Windows'],
    license: 'Open Source',
    websiteUrl: 'https://sqlmap.org',
    documentationUrl: 'https://github.com/sqlmapproject/sqlmap/wiki',
  },
  {
    id: 't10',
    slug: 'volatility',
    name: 'Volatility',
    description:
      'The world most advanced open source memory forensics framework for malware analysis.',
    category: 'Malware Analysis',
    platform: ['Linux', 'macOS', 'Windows'],
    license: 'Open Source',
    websiteUrl: 'https://www.volatilityfoundation.org',
    documentationUrl: 'https://github.com/volatilityfoundation/volatility3/wiki',
  },
  {
    id: 't11',
    slug: 'cloudsploit',
    name: 'CloudSploit',
    description:
      'A cloud security posture management tool for detecting misconfigurations in AWS, Azure, and GCP.',
    category: 'Cloud Security',
    platform: ['Cross-platform'],
    license: 'Open Source',
    websiteUrl: 'https://github.com/aquasecurity/cloudsploit',
    documentationUrl: 'https://github.com/aquasecurity/cloudsploit/wiki',
  },
  {
    id: 't12',
    slug: 'ffuf',
    name: 'ffuf',
    description:
      'A fast web fuzzer written in Go for directory, vhost, and parameter fuzzing with high performance.',
    category: 'Web Security',
    platform: ['Cross-platform'],
    license: 'Open Source',
    websiteUrl: 'https://github.com/ffuf/ffuf',
    documentationUrl: 'https://github.com/ffuf/ffuf/blob/master/README.md',
  },
];

export const SKILLS: Skill[] = [
  {
    category: 'Web Security',
    items: ['OWASP Top 10', 'XSS & CSRF', 'SQL Injection', 'SSRF', 'API Security', 'GraphQL Security'],
  },
  {
    category: 'Network Security',
    items: ['Nmap', 'Wireshark', 'Active Directory', 'Network Segmentation', 'Zero Trust'],
  },
  {
    category: 'OSINT',
    items: ['Subdomain Enumeration', 'Social Media Intel', 'Certificate Transparency', 'Wayback Analysis'],
  },
  {
    category: 'Development',
    items: ['TypeScript', 'Python', 'Go', 'Rust', 'Docker', 'Kubernetes', 'Next.js', 'PostgreSQL'],
  },
  {
    category: 'Cloud',
    items: ['AWS Security', 'Azure Security', 'IAM', 'Cloud Forensics', 'Container Security'],
  },
];

export const TIMELINE: TimelineEntry[] = [
  {
    year: '2026',
    title: 'CyberOS Platform Launch',
    description: 'Launched CyberOS as a unified cybersecurity knowledge platform with research, tools, and documentation.',
  },
  {
    year: '2025',
    title: 'Bug Bounty Milestones',
    description: 'Achieved top 500 on HackerOne, discovered 20+ critical vulnerabilities across major platforms.',
  },
  {
    year: '2024',
    title: 'Security Research Publications',
    description: 'Published 15+ research papers on cloud security, web exploitation, and malware analysis.',
  },
  {
    year: '2023',
    title: 'OSINT Framework Development',
    description: 'Built and open-sourced a comprehensive OSINT reconnaissance framework used by 500+ researchers.',
  },
  {
    year: '2022',
    title: 'Cybersecurity Career Begin',
    description: 'Started professional cybersecurity journey with focus on web application security and penetration testing.',
  },
];

export const CATEGORIES = [
  'Web Security',
  'Network Security',
  'Cloud Security',
  'OSINT',
  'Reverse Engineering',
  'Malware Analysis',
  'AI Security',
  'Development',
];

export const TAGS = [
  'xss', 'sqli', 'idor', 'ssrf', 'burpsuite', 'nmap', 'kali', 'nextjs',
  'typescript', 'docker', 'linux', 'graphql', 'jwt', 'cloud', 'aws', 'azure',
  'malware', 'ransomware', 'osint', 'recon', 'active-directory', 'kerberos',
];

export const RESEARCH_CATEGORIES = [
  'Web Security',
  'Network Security',
  'Cloud Security',
  'OSINT',
  'Reverse Engineering',
  'Malware Analysis',
  'AI Security',
];

export const PROJECT_CATEGORIES = [
  'Web', 'Security', 'OSINT', 'AI', 'Automation', 'Electronics', 'Open Source',
];

export const WRITEUP_CATEGORIES = [
  'Web Security',
  'Network Security',
  'Cloud Security',
  'Reverse Engineering',
  'Malware Analysis',
];

export const TOOL_CATEGORIES = [
  'Web Security',
  'Network Security',
  'OSINT',
  'Reverse Engineering',
  'Malware Analysis',
  'Cloud Security',
  'Development',
  'Productivity',
];

export const TOOL_PLATFORMS = [
  'Cross-platform', 'Linux', 'macOS', 'Windows',
];

export const TOOL_LICENSES = [
  'Open Source', 'Commercial', 'Freemium',
];
