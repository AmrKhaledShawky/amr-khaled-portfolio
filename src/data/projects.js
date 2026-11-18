import { publicAsset } from "../utils/paths.js";

export const projects = [
  {
    id: "vulnera-x",
    title: "VulnEra-X: AI-Powered Secure Coding Platform",
    image: publicAsset("research/images/vulnera-x.png"),
    imageSurface: "light",
    field: "Graduation Project | Software Engineering | AI/ML & Application Security",
    status: "Ongoing",
    phase: "Phase 3 - Core Analysis Pipeline",
    projectPath: "/projects/vulnera-x",
    description:
      "An AI-assisted secure-coding platform bringing security analysis closer to developers in VS Code. Its foundation includes role-aware workspaces, organization invitations, and VS Code account pairing; current work focuses on vulnerability dataset research and the core analysis pipeline.",
    tags: ["C / C++", "React + Vite", "Node.js + Express", "Prisma", "VS Code"],
    brief: [
      "VulnEra-X brings security analysis into the developer workflow, with the goal of helping teams identify and understand vulnerabilities while they work in VS Code.",
      "The platform's analysis direction combines static analysis, machine-learning classification, secret filtering, and language-model reasoning for contextual explanations and remediation guidance. Its delivered foundation includes a web application, role-aware organization workspaces, developer invitations, and VS Code account pairing. Current development focuses on vulnerability dataset research and the core analysis pipeline.",
    ],
    targetUsers: [
      "Individual developers",
      "Organization developers",
      "Organization administrators",
    ],
    productFlow: [
      {
        title: "Website and onboarding",
        description:
          "Users register or sign in with Google or GitHub and select an individual, organization developer, or organization administrator workspace.",
      },
      {
        title: "Role-aware workspaces",
        description:
          "Individual developers use a personal workspace, while organization developers and administrators work within their organization's space.",
      },
      {
        title: "Developer invitations",
        description:
          "Organization administrators invite developers, who can accept or decline and receive a separate organization work identity.",
      },
      {
        title: "VS Code account pairing",
        description:
          "A one-time code connects a website account to the VS Code extension, where users can view connection status and manage the pairing.",
      },
    ],
    architecture: [
      {
        title: "Web application",
        description:
          "A React/Vite application for onboarding, authentication, role selection, workspaces, organization membership, invitations, and VS Code account pairing.",
      },
      {
        title: "Backend and identity",
        description:
          "A Node.js/Express backend supports Google and GitHub sign-in, role-aware organization membership, and separate personal and organization work identities.",
      },
      {
        title: "Organization workflows",
        description:
          "Administrators invite developers and manage organization members, with a dedicated work identity for each organization membership.",
      },
      {
        title: "VS Code integration",
        description:
          "The extension connects to a website account through a one-time pairing code and displays the connection state.",
      },
    ],
    progress: [
      {
        title: "Platform foundation",
        status: "Completed",
        items: [
          "Public website with landing and pricing pages.",
          "Google and GitHub sign-in, registration, and role selection.",
          "Role-aware workspaces and organization member management.",
          "Organization invitation and work-account flows.",
          "VS Code extension account pairing and connection management.",
        ],
      },
      {
        title: "Current focus: Core analysis pipeline",
        status: "Ongoing",
        items: [
          "Researching labeled datasets for vulnerability classification.",
          "Comparing dataset licensing, language coverage, label quality, and vulnerability classes.",
          "Developing the analysis pipeline for the VS Code workflow.",
        ],
      },
    ],
    stack: [
      { label: "Frontend", value: "React, Vite" },
      { label: "Backend", value: "Node.js, Express" },
      { label: "Data access", value: "Prisma" },
      { label: "Authentication", value: "Google OAuth, GitHub OAuth" },
      { label: "Developer integration", value: "Visual Studio Code extension" },
      {
        label: "Security analysis direction",
        value: "Static analysis, machine-learning classification, language-model reasoning",
      },
    ],
    cvBrief:
      "Building an AI-assisted secure-coding platform with a React/Vite web application, Node.js/Express backend, organization workspaces, developer invitations, and VS Code account pairing. Current work focuses on vulnerability dataset research and a contextual security-analysis pipeline.",
  },
  {
    id: "car-calling",
    title: "Car Calling — Full-Stack Car Rental Platform",
    image: publicAsset("projects/images/car-calling.jpg"),
    field: "Full-Stack Development · Vehicle Rental",
    status: "Deployed",
    projectPath: "/projects/car-calling",
    description:
      "A full-stack car rental platform connecting renters, vehicle owners, and administrators through vehicle listings, availability search, booking workflows, and fleet management backed by MongoDB/Mongoose.",
    tags: [
      "React + Vite",
      "Node.js + Express",
      "MongoDB + Mongoose",
      "JWT + RBAC",
      "Docker",
    ],
    link: "https://car-callingg.vercel.app/",
    linkLabel: "Live Website",
    sourceLink: "https://github.com/AmrKhaledShawky/Car-Calling",
    overview: [
      "Car Calling brings renters, vehicle owners, and administrators together in one car rental management platform. It coordinates vehicle availability, booking dates, owner decisions, rental status, and platform administration.",
      "The frontend is a React/Vite application and the backend is a separate Node.js/Express API. The backend uses a layered structure for routing, validation, authentication and authorization, controllers, business services, and MongoDB data models.",
    ],
    roles: [
      {
        title: "Renter / Tenant",
        description:
          "Browse vehicle listings and details, search availability, create bookings with rental dates, choose supported insurance and additional services, and manage personal bookings.",
      },
      {
        title: "Vehicle Owner / Landlord",
        description:
          "Create and manage vehicle listings, view associated bookings, and confirm, complete, or cancel booking requests.",
      },
      {
        title: "Administrator",
        description:
          "Manage users, vehicle listings, bookings, and platform dashboard information through dedicated administration tools.",
      },
    ],
    productFlow: [
      "Users register or log in with JWT-based authentication.",
      "Role-based permissions guide access to renter, owner, and administrator workflows.",
      "Renters browse, filter, and search vehicle listings, then view vehicle details.",
      "The platform checks rental dates against existing bookings to manage availability.",
      "Renters submit bookings with vehicle and rental-period details.",
      "Vehicle owners review associated bookings and manage requests through the booking lifecycle.",
      "Administrators manage users, vehicles, bookings, and dashboard information.",
    ],
    architecture: [
      {
        title: "Frontend",
        description:
          "React 19, Vite 7, React Router, and Tailwind CSS 4 provide the application interface and navigation.",
      },
      {
        title: "Backend and persistence",
        description:
          "Node.js and Express 4 expose the API. MongoDB is accessed through Mongoose 8, with User, Car, and Booking models.",
      },
      {
        title: "Layered backend organization",
        description:
          "Routes connect endpoints to middleware and controllers. Middleware handles authentication, role authorization, ownership checks, uploads, validation, and errors. Services contain booking, pricing, status, vehicle, authentication, and administration logic; models represent MongoDB data.",
      },
    ],
    coreModules: [
      {
        title: "Authentication and accounts",
        description:
          "Registration and login, JWT access-token verification, refresh-token verification, logout and current-user endpoints, bcryptjs password hashing, and inactive-account checks.",
      },
      {
        title: "Role authorization and ownership",
        description:
          "Role-based permissions and ownership checks govern access to vehicle and booking operations.",
      },
      {
        title: "Vehicle and fleet management",
        description:
          "Public and available listings, vehicle detail, search by make/model/category/city, owner-specific lists, create/update/delete, image upload handling, pagination, sorting, filtering, and selected-field responses. Business rules protect vehicles with active or confirmed bookings from conflicting changes.",
      },
      {
        title: "Booking management",
        description:
          "Create and retrieve bookings, owner booking views, detail/update/cancel, confirm/complete, status and date filters, pagination, pickup/return addresses, insurance and extra services, cancellation reasons, and status transitions. Dedicated services separate pricing, rules, queries, mapping, and orchestration.",
      },
      {
        title: "Administrative management",
        description:
          "Separate admin routes, controllers, and services support vehicle, user, booking, and statistics operations.",
      },
    ],
    securityPractices: [
      "JWT verification for protected API requests and password hashing with bcryptjs.",
      "Role-based authorization and resource ownership checks for cars and bookings.",
      "Request validation with express-validator.",
      "Helmet security headers, CORS configuration, and express-rate-limit.",
      "Centralized request/error middleware, inactive-account checks, and business rules that prevent conflicting vehicle operations.",
      "Structured application and request logging with Pino and pino-http.",
    ],
    apiExamples: [
      "Authentication: registration, login, current user, logout, and refresh-token endpoints.",
      "Cars: list, available, search, detail, and owner-protected create/update/delete operations.",
      "Bookings: create, personal and owner booking lists, detail, update, and cancel operations.",
      "Administration: dashboard statistics, user management, booking management, and vehicle administration.",
    ],
    dataModels: [
      {
        title: "User",
        description:
          "Platform identity and contact information, authentication data, account status, and role.",
      },
      {
        title: "Car",
        description:
          "Vehicle specifications, owner association, pricing and availability information, location, and vehicle attributes.",
      },
      {
        title: "Booking",
        description:
          "Rental transaction connecting renter/customer, owner, and vehicle with dates, pricing, status, and related booking information.",
      },
    ],
    quality: [
      "Backend tests cover authentication, authorization and ownership middleware, bookings, cars, API query features, and administration.",
      "Backend test tooling includes Jest and Supertest; frontend tooling includes Vitest, Testing Library, and Mock Service Worker.",
      "GitHub Actions runs backend and frontend test/build steps.",
    ],
    deployment: [
      "Frontend web application deployed at https://car-callingg.vercel.app/.",
      "Docker configuration includes a Node 20 Alpine backend image and Docker Compose services for MongoDB, backend, and frontend, with a named MongoDB data volume and documented ports.",
      "The repository includes a Vercel frontend deployment guide.",
    ],
    stack: [
      { label: "Frontend", value: "React 19, Vite 7, React Router, Tailwind CSS 4" },
      { label: "Backend", value: "Node.js, Express 4" },
      { label: "Database", value: "MongoDB, Mongoose 8" },
      { label: "Authentication and security", value: "JWT, bcryptjs, Helmet, CORS, express-rate-limit, express-validator" },
      { label: "Testing", value: "Jest, Supertest, Vitest, Testing Library, MSW" },
      { label: "DevOps and deployment", value: "Docker, Docker Compose, GitHub Actions, Vercel" },
      { label: "Version control", value: "Git, GitHub" },
    ],
    contributions: [
      "Building a full-stack React application and REST API backend.",
      "Designing role-aware workflows for renters, vehicle owners, and administrators.",
      "Implementing JWT authentication and refresh-token verification.",
      "Enforcing role permissions and resource-level ownership.",
      "Modeling the booking lifecycle with explicit statuses and business rules.",
      "Separating services for pricing, availability, booking queries, and status transitions.",
      "Applying request validation and pagination to API endpoints.",
      "Preparing a Docker Compose local multi-service environment.",
      "Organizing backend tests across authentication, authorization, ownership, vehicles, bookings, and admin functions.",
      "Configuring frontend deployment on Vercel.",
    ],
    portfolioSummary:
      "Car Calling is a full-stack car rental and management platform connecting renters and vehicle owners through role-specific workflows. It uses a React/Vite frontend and a layered Node.js/Express API backed by MongoDB/Mongoose. The backend includes JWT authentication, role-based access control, ownership validation, vehicle listing and availability search, booking lifecycle operations, request validation, and administrative services. The repository also includes tests, CI workflow configuration, and Docker Compose setup.",
  },
  {
    id: "genesis-p2p",
    title: "Genesis P2P Framework",
    image: publicAsset("projects/images/genesis-p2p.jpg"),
    field: "Distributed Systems · Peer-to-Peer Networking · Secure Communication",
    status: "Completed",
    projectPath: "/projects/genesis-p2p",
    description:
      "A modular Java framework for decentralized peer-to-peer applications, bringing peer discovery, TCP/UDP communication, secure messaging, connection management, reliability controls, and monitoring into one infrastructure layer.",
    tags: ["Java 21", "TCP / UDP", "ECDH", "AES-GCM", "HMAC", "Maven", "JUnit 5"],
    overview: [
      "Modern applications often depend on centralized servers to coordinate communication between devices. This can introduce a single point of failure, increase infrastructure costs, create communication bottlenecks, and make systems dependent on a central service.",
      "Genesis P2P Framework provides modular infrastructure for decentralized applications. Nodes can discover one another, establish connections, exchange structured information directly, manage peer state, and monitor network activity without routing every communication through one central server.",
    ],
    challenges: [
      "Discovering available peers without relying entirely on a centralized directory.",
      "Establishing connectivity when nodes are behind routers, firewalls, or NAT configurations.",
      "Protecting peer communication and exchanged messages.",
      "Handling duplicate messages, processing failures, network congestion, and temporary communication issues.",
      "Monitoring peer availability and health as the network grows.",
    ],
    components: [
      {
        title: "Node initialization and participation",
        description:
          "Each participant runs a Genesis node with its own identity and configuration. The node initializes networking and peer-management components, registers message processors, and tracks known peers, connection states, and availability.",
      },
      {
        title: "Intelligent peer discovery",
        description:
          "Supports multicast discovery on compatible local networks, broadcast discovery, bootstrap entry points, and hybrid discovery that can switch strategies when the required peer threshold has not been reached.",
      },
      {
        title: "Networking and NAT traversal",
        description:
          "TCP and UDP components support connection-oriented and datagram communication. NAT-related and STUN-based mechanisms help identify externally visible network endpoints and address common direct-connectivity challenges.",
      },
      {
        title: "Secure peer communication",
        description:
          "The security layer includes ECDH key exchange, AES-GCM authenticated encryption, HMAC validation, key-management operations, trusted-peer management, and secure-session management.",
      },
      {
        title: "Structured message processing",
        description:
          "Messages have headers and bodies for fields such as identity, sender, recipient, type, timestamp, protocol version, and content. A processor registry routes incoming messages by type, allowing new message types and handlers to be added modularly.",
      },
      {
        title: "Reliable message execution",
        description:
          "Asynchronous processing, deduplication, retries, backpressure management, rate limiting, circuit breakers, and a dead-letter queue help control failures, duplicate requests, overloaded queues, and unresponsive components.",
      },
      {
        title: "Peer lifecycle and health",
        description:
          "Peer management tracks lifecycle and connection state, health, stale-peer cleanup, reputation, events, and metrics.",
      },
      {
        title: "Events and observability",
        description:
          "Components communicate through published events and registered listeners. Structured logs, metrics, message lifecycle tracking, trace identifiers, and execution spans help developers inspect network behavior and investigate issues.",
      },
    ],
    systemMessages: [
      "HELLO and WELCOME for initial peer interaction.",
      "PING and PONG for connectivity checks and peer responsiveness.",
      "HEARTBEAT for periodic peer activity monitoring.",
      "GOODBYE for graceful peer disconnection.",
      "Discovery messages for peer advertisements, peer-list requests, bootstrap communication, and node information exchange.",
    ],
    differentiators: [
      "Multiple peer-discovery strategies rather than a single discovery mechanism.",
      "Connectivity-related components designed for different network environments.",
      "Dedicated cryptographic and peer-trust architecture.",
      "Structured and extensible message processing.",
      "Reliability mechanisms for failure handling and processing pressure.",
      "Peer lifecycle management within each node.",
      "Event-driven monitoring and observability.",
    ],
    stack: [
      { label: "Core technology", value: "Java 21" },
      { label: "Build and dependencies", value: "Apache Maven" },
      { label: "Networking", value: "TCP, UDP, STUN-related mechanisms" },
      { label: "Security", value: "ECDH, AES-GCM, HMAC" },
      { label: "Architecture", value: "Modular design, asynchronous processing, event-driven architecture, peer management, message processor registry" },
      { label: "Testing", value: "JUnit 5, Mockito" },
    ],
    outcome:
      "Genesis P2P Framework provides a reusable foundation for decentralized applications that need direct communication between distributed nodes. By organizing peer discovery, networking, security, message handling, reliability, and monitoring into one framework, it reduces the need for each application to implement that infrastructure independently.",
  },
];

export const projectImagePlaceholder = publicAsset(
  "projects/images/placeholder-project.svg",
);
