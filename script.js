// =============== DATA ==================
const premiumConnectors = [
  "Jira Service Management Cloud", "Jira Cloud platform", "Zoho CRM", "SAP S/4HANA", "Infor", "Workday",
  "ServiceNow", "Sage HR", "Oracle Human Capital Management (HCM)", "SAP SuccessFactors", "Sage 200", "Sage",
  "Sage Intacct", "Priority", "Salesforce", "monday.com", "Netsuite", "Expensify", "Hubspot CRM",
  "Azure Active Directory", "Microsoft Dataverse", "MS SQL", "MySQL", "Oracle", "Postgres", "IBM DB2",
  "Comeet", "Okta", "Zendesk – Including SCIM", "SAP Business One", "Zip HQ", "hibob", "BambooHR"
];

const allConnectors = [
  { name: "Amazon SQS", category: "Messaging/Queue", useCases: ["Automate message queuing for scalable applications", "Integrate with serverless functions for event-driven architectures", "Decouple microservices for increased resilience", "Process high volumes of messages asynchronously", "Manage task queues for background jobs", "Enable reliable communication between distributed systems"] },
  { name: "Box", category: "Storage/Files", useCases: ["Automate document workflows and approvals", "Sync files across teams and systems", "Manage content collaboration securely", "Trigger actions on new file uploads", "Automate document version control", "Integrate with e-signature solutions"] },
  { name: "Comeet", category: "HR/Recruiting", useCases: ["Streamline financial operations", "Automate accounting processes", "Integrate with banking systems", "Manage invoices and payments efficiently", "Generate financial reports", "Ensure compliance and audit trails"] },
  { name: "Expensify", category: "Finance/Expense", useCases: ["Automate expense report processing", "Capture receipts and categorize expenses", "Streamline approval workflows", "Reimburse employees automatically", "Integrate with accounting software", "Generate expense analytics reports"] },
  { name: "Fireberry", category: "CRM", useCases: ["Automate lead management and nurturing", "Sync customer data across sales and marketing", "Manage sales pipelines and opportunities", "Automate customer communication", "Generate sales performance reports", "Integrate with marketing automation platforms"] },
  { name: "Salesforce", category: "CRM", useCases: ["Lead enrichment from external DB", "Approval flow with Slack + Engini Apps", "Sync closed-won to ERP invoice", "Auto-create NetSuite record from opportunity", "Automate contract generation via DocuSign", "Integrate customer feedback from SurveyMonkey"] },
  { name: "Bill.com", category: "Finance/Payments", useCases: ["Integrate with cryptocurrency exchanges", "Automate trading strategies", "Monitor market data in real-time", "Manage digital asset portfolios", "Execute secure transactions", "Generate crypto-related reports"] },
  { name: "Jumpcloud", category: "HR/Identity", useCases: ["Automate user identity and access management", "Sync user directories across applications", "Manage device compliance and security", "Implement single sign-on (SSO)", "Automate user provisioning and deprovisioning", "Integrate with IT management tools"] },
  { name: "Okta", category: "HR/Identity", useCases: ["Automate identity management and authentication", "Implement secure single sign-on (SSO)", "Manage user access to cloud applications", "Automate user lifecycle management", "Integrate with directories like Active Directory", "Enhance security with multi-factor authentication (MFA)"] },
  { name: "Anthropic", category: "AI/LLM", useCases: ["Integrate AI models for natural language processing", "Automate content generation and summarization", "Develop AI-powered chatbots and virtual assistants", "Analyze text data for insights", "Enhance decision-making with AI-driven recommendations", "Automate complex reasoning tasks"] },
  { name: "PayPal", category: "Finance/Payments", useCases: ["Automate payment processing for e-commerce", "Sync transaction data with accounting tools", "Generate automated payment receipts", "Trigger actions on successful payments", "Automate dispute resolution workflows", "Integrate with order management systems"] },
  { name: "Perplexity", category: "AI/LLM", useCases: ["Integrate with AI-powered search and summarization", "Automate research and information gathering", "Generate concise answers from complex data", "Enhance content creation with AI insights", "Streamline knowledge retrieval", "Automate data synthesis from multiple sources"] },
  { name: "Gmail", category: "Communication/Email", useCases: ["Automate email parsing and data extraction", "Send personalized email campaigns", "Create support tickets from incoming emails", "Filter and categorize emails automatically", "Trigger workflows based on email content", "Archive old emails based on rules"] },
  { name: "G Workspace", category: "Communication/Collaboration", useCases: ["Sync data across Google Workspace apps (Docs, Sheets, Slides)", "Automate document sharing and permissions", "Manage calendar events and invites", "Streamline communication via Google Chat/Meet", "Automate data entry and reporting", "Integrate with other business tools"] },
  { name: "HERP", category: "HR/ERP", useCases: ["Automate human resource management processes", "Manage employee data and records", "Streamline recruitment and onboarding", "Automate payroll and benefits administration", "Track time and attendance", "Generate HR reports and analytics"] },
  { name: "HFD", category: "Finance/Data", useCases: ["Automate financial data synchronization", "Integrate with specific financial databases or services", "Process complex financial transactions", "Generate compliance reports", "Automate data reconciliation", "Support advanced financial analytics"] },
  { name: "IBM DB2", category: "Database", useCases: ["Automate database operations and management", "Sync data with enterprise applications", "Perform complex queries and reporting", "Manage data integrity and security", "Automate data migration and backup", "Integrate with business intelligence tools"] },
  { name: "Jira", category: "Project Management", useCases: ["Automate issue creation from emails/forms", "Sync task status with project management tools", "Trigger notifications on status changes", "Create custom reports on team performance", "Automate sprint planning updates", "Integrate with CI/CD pipelines"] },
  { name: "Gemini", category: "AI/LLM", useCases: ["Integrate advanced AI capabilities into applications", "Automate content generation and summarization", "Develop intelligent chatbots and virtual assistants", "Process and analyze complex data with AI", "Enhance decision-making with AI-driven insights", "Create dynamic and personalized experiences"] },
  { name: "OneDrive", category: "Storage/Files", useCases: ["Automate document storage and sharing", "Sync files across devices and teams", "Trigger workflows on new file uploads", "Manage folder permissions and access", "Automate document version control", "Integrate with Microsoft Office applications"] },
  { name: "ServiceNow", category: "ITSM/Service", useCases: ["Automate IT service management (ITSM) workflows", "Manage incident, problem, and change requests", "Streamline employee onboarding and offboarding", "Automate IT operations management (ITOM)", "Integrate with HR and security platforms", "Generate service desk reports and analytics"] },
  { name: "Snowflake", category: "Database/Data Warehouse", useCases: ["Automate data warehousing and analytics", "Ingest and process large datasets efficiently", "Integrate with business intelligence tools", "Automate data transformation and loading (ETL/ELT)", "Enable secure data sharing and collaboration", "Support real-time data analysis"] },
  { name: "Marketo", category: "Marketing Automation", useCases: ["Automate marketing campaigns and lead nurturing", "Sync lead data with CRM systems", "Personalize customer journeys and experiences", "Track engagement and analyze campaign performance", "Automate email marketing and segmentation", "Integrate with sales and advertising platforms"] },
  { name: "LinkedIn", category: "Sales/Marketing", useCases: ["Automate lead generation from LinkedIn Sales Navigator", "Sync professional profiles with CRM", "Automate outreach campaigns", "Track company updates and integrate with internal dashboards", "Streamline recruitment processes", "Manage social selling activities"] },
  { name: "ManyChat", category: "Communication/Chatbot", useCases: ["Automate chatbot conversations for customer support", "Send personalized messages via Messenger", "Capture leads and qualify them automatically", "Integrate with CRM and e-commerce platforms", "Automate marketing campaigns through chat", "Handle frequently asked questions (FAQs)"] },
  { name: "Meshulam", category: "Finance/Payments", useCases: ["Automate payment collection and reconciliation", "Send payment requests and reminders", "Integrate with accounting software", "Process online and offline payments", "Generate payment reports", "Manage recurring payments and subscriptions"] },
  { name: "Dynamics 365", category: "ERP/CRM", useCases: ["Sync customer data with marketing automation", "Automate sales order processing", "Integrate financial data with reporting tools", "Streamline service request management", "Automate supply chain workflows", "Generate customized business reports"] },
  { name: "MS SQL", category: "Database", useCases: ["Automate data warehousing and ETL processes", "Perform complex data queries and reporting", "Sync data with business applications", "Manage database backups and recovery", "Implement data security and access control", "Automate database maintenance tasks"] },
  { name: "MySQL", category: "Database", useCases: ["Automate data entry and updates", "Synchronize data with CRMs/ERPs", "Generate custom reports from raw data", "Trigger actions based on database changes", "Automate data migration tasks", "Build custom data integrations"] },
  { name: "NetSuite", category: "ERP", useCases: ["OCR invoice ingestion to NetSuite", "MCP AI insights on workflows", "Real-time sync to Monday boards", "Auto-create items from Shopify products", "Automate expense report processing", "Synchronize multi-currency transactions"] },
  { name: "Microsoft", category: "Platform/General", useCases: ["Integrate with various Microsoft services (Azure, Office 365, etc.)", "Automate cross-platform workflows", "Manage user identities and access", "Sync data between Microsoft and non-Microsoft apps", "Leverage Microsoft AI and cloud services", "Build custom business applications"] },
  { name: "Wiz", category: "Security", useCases: ["Automate cloud security posture management", "Monitor cloud environments for vulnerabilities", "Integrate security findings with ticketing systems", "Enforce compliance policies across cloud resources", "Automate threat detection and response", "Generate cloud security reports"] },
  { name: "Tiipati", category: "Finance/Payments", useCases: ["Automate payment processing and financial operations", "Integrate with banking and accounting systems", "Streamline invoicing and reconciliation", "Manage vendor payments and expenses", "Generate financial reports", "Ensure compliance in financial transactions"] },
  { name: "Coupa", category: "Procurement/Finance", useCases: ["Automate procurement and spend management", "Streamline purchasing workflows and approvals", "Integrate with suppliers and vendors", "Process invoices and payments efficiently", "Manage contracts and sourcing events", "Generate spend analytics and reports"] },
  { name: "Microsoft Teams", category: "Communication/Chat", useCases: ["Send channel notifications from business apps", "Automate meeting scheduling and reminders", "Integrate with project management tools", "Post automated reports and dashboards", "Trigger workflows from specific commands", "Automate team status updates"] },
  { name: "Gusto", category: "HR/Payroll", useCases: ["Automate payroll processing and tax filings", "Sync employee data with HR systems", "Manage benefits administration automatically", "Generate payroll reports", "Automate new hire onboarding tasks", "Integrate with accounting software"] },
  { name: "Open AI", category: "AI/LLM", useCases: ["Integrate advanced AI models (GPT, DALL-E) into applications", "Automate natural language generation and understanding", "Develop AI-powered content creation and summarization tools", "Build intelligent chatbots and virtual assistants", "Enhance decision-making with AI-driven insights", "Automate complex problem-solving tasks"] },
  { name: "Oracle E-Business Suite", category: "ERP", useCases: ["Automate financial closing processes", "Integrate supply chain data", "Sync customer and vendor records", "Automate procurement workflows", "Generate real-time performance dashboards", "Process payroll data automatically"] },
  { name: "PayPlus", category: "Finance/Payments", useCases: ["Automate payment gateway integrations", "Process online and in-person payments securely", "Generate payment receipts and confirmations", "Manage subscriptions and recurring billing", "Integrate with e-commerce platforms", "Automate fraud detection and prevention"] },
  { name: "PostgreSQL", category: "Database", useCases: ["Automate data replication and backup", "Integrate with business intelligence tools", "Trigger workflows on database events", "Perform complex data aggregations", "Automate data cleansing and validation", "Sync data across multiple databases"] },
  { name: "Priority", category: "ERP", useCases: ["Sync order lines from ecommerce", "Auto-create vendor payments", "Push invoice PDFs to Dropbox", "Connect to Tableau for insights", "Automate inventory level reordering", "Generate financial reports automatically"] },
  { name: "Quickbooks", category: "Finance/Accounting", useCases: ["Automate invoicing and payment processing", "Sync customer and vendor data", "Manage expenses and track budgets", "Generate financial reports automatically", "Automate bank reconciliation", "Integrate with e-commerce platforms"] },
  { name: "Dealfront", category: "Sales/Marketing", useCases: ["Automate lead identification and qualification", "Integrate with CRM for lead enrichment", "Track website visitor behavior for sales insights", "Generate sales intelligence reports", "Automate outreach personalized messages", "Identify new business opportunities"] },
  { name: "ADP", category: "HR/Payroll", useCases: ["Automate payroll data submission", "Sync employee information with HRIS", "Generate compliance reports", "Manage time and attendance data", "Automate benefits enrollment and changes", "Integrate with financial systems"] },
  { name: "Business One", category: "ERP", useCases: ["Automate core business processes (finance, sales, purchasing, inventory)", "Integrate with CRM and e-commerce platforms", "Manage customer relationships and sales cycles", "Generate real-time business insights", "Automate inventory and production planning", "Streamline reporting and analytics"] },
  { name: "Monday CRM", category: "CRM/Project Management", useCases: ["Manage sales pipelines and opportunities on Monday.com", "Automate lead tracking and nurturing", "Sync customer data with other tools", "Generate CRM reports and dashboards", "Automate client communication and follow-ups", "Collaborate on sales activities within Monday.com"] },
  { name: "BASE44", category: "Custom/Platform", useCases: ["Automate data processing and transformation for specific platforms", "Integrate with niche industry applications", "Handle specialized data formats", "Enable custom data workflows", "Connect to unique enterprise systems", "Facilitate complex data migrations"] },
  { name: "Loveable", category: "Marketing/Loyalty", useCases: ["Automate customer loyalty programs", "Manage rewards and redemption processes", "Personalize customer engagement strategies", "Integrate with CRM for unified customer views", "Analyze customer behavior and preferences", "Send automated personalized offers and promotions"] },
  { name: "WooCommerce", category: "E-commerce", useCases: ["Automate order management and status updates", "Sync product and inventory with ERP", "Integrate customer data with email marketing", "Trigger abandoned cart recovery workflows", "Automate shipping notifications", "Generate sales analytics reports"] },
  { name: "Zendesk", category: "ITSM/Service", useCases: ["Auto-assign tickets based on SLA breach", "Sync ticket resolution with task tools", "Build support dashboards via Tables", "Trigger alerts to WhatsApp or Slack", "Automate follow-up emails for closed tickets", "Integrate with knowledge base for self-service"] },
  { name: "Zip Archive", category: "Utility/Files", useCases: ["Automate file compression and archiving", "Extract files from zip archives", "Secure data for transfer or storage", "Manage large sets of documents", "Automate backup procedures", "Integrate with document management systems"] },
  { name: "Zuora", category: "Finance/Subscription", useCases: ["Automate subscription billing and revenue recognition", "Manage recurring payments and invoicing", "Integrate with CRM and ERP for customer data", "Streamline pricing and packaging changes", "Automate dunning management for failed payments", "Generate subscription analytics and reports"] },
  { name: "Acumatica", category: "ERP", useCases: ["Automate enterprise resource planning (ERP) processes", "Manage financial, project, and inventory data", "Integrate with CRM and e-commerce solutions", "Streamline sales order and purchasing workflows", "Automate reporting and analytics", "Support multi-company and multi-currency operations"] },
  { name: "Payme", category: "Finance/Payments", useCases: ["Automate payment processing for Israeli market", "Send payment requests via various channels", "Integrate with accounting software", "Manage transactions and refunds", "Generate payment reports", "Automate reconciliation processes"] },
  { name: "PowerPoint", category: "Communication/Presentation", useCases: ["Automate presentation creation from data", "Insert charts and graphs from Excel/Sheets", "Generate reports as slide decks", "Update presentation content dynamically", "Automate sharing and distribution of presentations", "Integrate with content management systems"] },
  { name: "MS Planner", category: "Project Management", useCases: ["Automate task creation and assignment", "Sync plan updates with team communication tools", "Track project progress and deadlines", "Generate reports on task completion", "Automate notifications for task changes", "Integrate with other Microsoft 365 services"] },
  { name: "MS OneNote", category: "Communication/Notes", useCases: ["Automate note creation from various sources", "Organize notes and ideas into sections/pages", "Sync notes across devices", "Extract information from notes for other apps", "Automate content sharing and collaboration", "Integrate with meeting minutes workflows"] },
  { name: "SharePoint", category: "Storage/Collaboration", useCases: ["Automate document management workflows", "Manage permissions and access control", "Synchronize files with other platforms", "Trigger workflows on document changes", "Automate content publishing", "Build custom team collaboration sites"] },
  { name: "MS Forms", category: "Data Collection", useCases: ["Automate data collection from surveys and quizzes", "Trigger workflows on new form responses", "Populate spreadsheets with response data", "Send automated confirmation emails", "Analyze survey results and generate reports", "Integrate with other Microsoft 365 services"] },
  { name: "G Calendar", category: "Communication/Scheduling", useCases: ["Automate event creation from various sources", "Sync calendar events with CRM/project tools", "Send automated meeting invites and reminders", "Manage resource bookings and availability", "Trigger workflows based on event changes", "Integrate with scheduling tools"] },
  { name: "Active Directory", category: "HR/Identity", useCases: ["Automate user provisioning and deprovisioning", "Sync user attributes with cloud applications", "Manage group memberships automatically", "Implement single sign-on (SSO)", "Automate password resets and account unlocks", "Integrate with identity management solutions"] },
  { name: "Xero", category: "Finance/Accounting", useCases: ["Automate accounting processes for small businesses", "Manage invoicing, bills, and payroll", "Reconcile bank transactions automatically", "Generate financial reports and insights", "Integrate with e-commerce and CRM platforms", "Automate expense tracking and categorization"] },
  { name: "Infor ERP", category: "ERP", useCases: ["Automate enterprise resource planning across functions", "Manage manufacturing, supply chain, and finance", "Integrate with specialized industry solutions", "Streamline business processes end-to-end", "Automate data collection and reporting", "Support global operations and multi-entity structures"] },
  { name: "Sage", category: "Finance/Accounting", useCases: ["Automate financial data entry and updates", "Sync customer and supplier records", "Manage inventory and sales orders", "Generate comprehensive accounting reports", "Automate invoicing and payment reminders", "Integrate with CRM and e-commerce platforms"] },
  { name: "Asana", category: "Project Management", useCases: ["Automate task assignment based on rules", "Sync project milestones with calendars", "Create tasks from form submissions", "Generate project progress reports", "Automate team communication updates", "Integrate with time tracking tools"] },
  { name: "Google Chat", category: "Communication/Chat", useCases: ["Send automated notifications to channels", "Create new rooms for project discussions", "Integrate with project management tools", "Post daily summaries or alerts", "Trigger workflows from specific commands", "Automate meeting reminders"] },
  { name: "Google Docs", category: "Communication/Collaboration", useCases: ["Automate document creation from templates", "Populate documents with data from other sources", "Manage document versions and collaboration", "Trigger workflows on document changes", "Generate reports as text documents", "Integrate with approval processes"] },
  { name: "Google Forms", category: "Data Collection", useCases: ["Automate data collection from surveys", "Trigger workflows on new form submissions", "Populate spreadsheets with response data", "Send automated confirmation emails", "Create lead records in CRM from forms", "Generate reports from collected data"] },
  { name: "Google Keep", category: "Communication/Notes", useCases: ["Automate note creation and organization", "Sync reminders with calendar", "Extract text from images in notes", "Share notes with team members automatically", "Integrate with task management tools", "Archive completed notes and lists"] },
  { name: "Google Meet", category: "Communication/Video", useCases: ["Automate meeting scheduling and invites", "Generate post-meeting summaries", "Integrate attendance data with HR systems", "Trigger actions based on meeting events", "Automate recording and transcription", "Sync with CRM for meeting logs"] },
  { name: "Google Sheets", category: "Database/Spreadsheet", useCases: ["Automate data entry from web forms", "Generate reports from various sources", "Sync contact lists with CRM", "Trigger notifications based on cell changes", "Create dynamic dashboards", "Automate data validation and cleaning"] },
  { name: "Monday.com", category: "Project Management/CRM", useCases: ["Bi-directional sync with Zendesk tickets", "Push closed deals from CRM", "Track SLA workflows visually", "Trigger MCP models on board updates", "Automate project status updates", "Sync tasks with Google Calendar"] },
  { name: "Airtable", category: "Database/Spreadsheet", useCases: ["Automate database management and record creation", "Sync data with other applications", "Build custom workflows and automations", "Generate reports and dashboards from bases", "Automate data validation and cleanup", "Integrate with form submissions and email"] },
  { name: "Clay", category: "Data Enrichment/AI", useCases: ["Automate lead enrichment from various data sources", "Build personalized outreach campaigns", "Identify target accounts and contacts", "Integrate with CRM and sales engagement tools", "Automate data cleansing and deduplication", "Generate sales intelligence insights"] },
  { name: "ClickUp", category: "Project Management", useCases: ["Automate task creation and assignment", "Sync status with CRM and support tools", "Generate customized dashboards", "Trigger notifications for deadlines", "Automate project template creation", "Integrate with communication tools"] },
  { name: "UPS", category: "Shipping", useCases: ["Automate shipping label generation", "Track package status in real-time", "Sync shipping data with order management systems", "Calculate shipping costs automatically", "Generate shipping reports", "Automate delivery notifications"] },
  { name: "FedEx", category: "Shipping", useCases: ["Automate shipping label creation", "Monitor package delivery status", "Integrate tracking information with customer portals", "Calculate shipping rates dynamically", "Generate detailed shipping manifests", "Automate return processes"] },
  { name: "Google Slides", category: "Communication/Presentation", useCases: ["Automate presentation creation from data", "Insert charts and graphs from Sheets/Excel", "Update presentation content dynamically", "Generate reports as slide decks", "Automate sharing and permissions for presentations", "Integrate with data visualization tools"] },
  { name: "Google Tasks", category: "Project Management/Personal", useCases: ["Automate task creation from emails or events", "Sync tasks with calendar and other productivity apps", "Set reminders and deadlines for tasks", "Manage personal and team to-do lists", "Trigger workflows upon task completion", "Integrate with project management tools"] },
  { name: "Confluence", category: "Communication/Collaboration", useCases: ["Automate documentation workflows and approvals", "Manage knowledge base articles and updates", "Sync content with Jira for project context", "Generate reports on content usage", "Automate page creation from templates", "Integrate with team collaboration tools"] },
  { name: "DocuSign", category: "Legal/Signature", useCases: ["Automate contract generation and sending", "Track document signing status in real-time", "Integrate signed documents with CRM/ERP", "Trigger workflows upon document completion", "Automate legal document archiving", "Send automated reminders for pending signatures"] },
  { name: "Slack", category: "Communication/Chat", useCases: ["Send alert when ERP workflow fails", "Notify approvers with Engini buttons", "Post CRM status changes to channels", "Send daily summaries from Engini Table", "Automate team onboarding notifications", "Create interactive polls for team feedback"] },
  { name: "Azure", category: "Cloud Platform", useCases: ["Automate cloud resource provisioning and management", "Monitor cloud service performance and logs", "Trigger workflows based on Azure events", "Manage data storage and databases in Azure", "Automate cost optimization and scaling", "Integrate with other Microsoft services"] },
  { name: "Google Cloud", category: "Cloud Platform", useCases: ["Automate resource management in the cloud", "Monitor cloud service usage", "Trigger functions on cloud events", "Manage data analytics pipelines", "Automate machine learning workflows", "Integrate with various GCP services"] },
  { name: "AWS", category: "Cloud Platform", useCases: ["Automate resource provisioning and scaling", "Monitor cloud infrastructure performance", "Trigger workflows based on cloud events", "Manage data storage and backups", "Automate cost optimization strategies", "Integrate with serverless functions"] },
  { name: "Pipedrive", category: "CRM", useCases: ["Automate sales pipeline management", "Sync lead data with marketing tools", "Track deals and activities automatically", "Generate sales reports and forecasts", "Automate email outreach and follow-ups", "Integrate with communication platforms"] },
  { name: "Zoho", category: "CRM/Platform", useCases: ["Sync CRM data with marketing automation", "Automate invoice generation and payments", "Integrate support tickets with project management", "Streamline sales pipeline management", "Automate email marketing campaigns", "Manage comprehensive business operations"] },
  { name: "HubSpot", category: "CRM/Marketing Automation", useCases: ["Auto-create deals in Salesforce", "Sync lifecycle status to ERP", "Push webinar registrations to CRM", "Trigger NPS surveys based on deal status", "Automate blog post publishing from drafts", "Integrate marketing qualified leads with sales team workflows"] }
];

// =============== STATE/DOM ==================
let currentFilter = '';
let premiumOnly = false;

const searchInput = document.getElementById('searchInput');
const premiumToggle = document.getElementById('premiumOnlyToggle'); // optional
const connectorCatalog = document.getElementById('connectorCatalog');
const useCasesDisplay = document.getElementById('useCasesDisplay');
const useCasesTitle = document.getElementById('useCasesTitle');
const useCasesList = document.getElementById('useCasesList');
const backToConnectorsBtn = document.getElementById('backToConnectorsBtn');
const mainInstruction = document.getElementById('mainInstruction');

// =============== LOGOS ==================
const logoMap = {
  "Amazon SQS": "logos/Amazon-sqs.png",
  "Box": "logos/box.png",
  "Comeet": "logos/comeet.png",
  "Expensify": "logos/Expensify.png",
  "Fireberry": "logos/Fireberry.png",
  "Salesforce": "logos/salesforce.png",
  "Bill.com": "logos/bill-com.png",
  "Jumpcloud": "logos/jumpcloud.png",
  "Okta": "logos/Okta.png",
  "Anthropic": "logos/Anthropic.png",
  "PayPal": "logos/PayPal.png",
  "Perplexity": "logos/Perplexity.png",
  "Gmail": "logos/Gmail.png",
  "G Workspace": "logos/G-Workspace.png",
  "HERP": "logos/HERP.png",
  "HFD": "logos/HFD.png",
  "IBM DB2": "logos/IBM-DB2.png",
  "Jira": "logos/jira.png",
  "Gemini": "logos/gemini.png",
  "OneDrive": "logos/onedrive.png",
  "ServiceNow": "logos/servicenow.png",
  "Snowflake": "logos/snowflake.png",
  "Marketo": "logos/marketo.png",
  "LinkedIn": "logos/linkedin.png",
  "ManyChat": "logos/manychat.png",
  "Meshulam": "logos/meshulam.png",
  "Dynamics 365": "logos/dynamics-365.png",
  "MS SQL": "logos/ms-sql.png",
  "MySQL": "logos/mysql.png",
  "NetSuite": "logos/netsuite.png",
  "Microsoft": "logos/Microsoft.png",
  "Wiz": "logos/Wiz.png",
  "Tiipati": "logos/Tiipati.png",
  "Coupa": "logos/Coupa.png",
  "Microsoft Teams": "logos/microsoft-teams.png",
  "Gusto": "logos/Gusto.png",
  "Open AI": "logos/openai.png",
  "Oracle E-Business Suite": "logos/oracle-ebs.png",
  "PayPlus": "logos/PayPlus.png",
  "PostgreSQL": "logos/PostgreSQL.png",
  "Priority": "logos/priority.png",
  "Quickbooks": "logos/quickbooks.png",
  "Dealfront": "logos/Dealfront.png",
  "ADP": "logos/adp.png",
  "Business One": "logos/business-one.png",
  "Monday CRM": "logos/monday-crm.png",
  "BASE44": "logos/base44.png",
  "Loveable": "logos/loveable.png",
  "WooCommerce": "logos/woocommerce.png",
  "Zendesk": "logos/zendesk.png",
  "Zip Archive": "logos/zip-archive.png",
  "Zuora": "logos/zuora.png",
  "Acumatica": "logos/acumatica.png",
  "Payme": "logos/payme.png",
  "PowerPoint": "logos/powerpoint.png",
  "MS Planner": "logos/ms-planner.png",
  "MS OneNote": "logos/ms-onenote.png",
  "SharePoint": "logos/sharepoint.png",
  "MS Forms": "logos/ms-forms.png",
  "G Calendar": "logos/g-calendar.png",
  "Active Directory": "logos/active-directory.png",
  "Xero": "logos/xero.png",
  "Infor ERP": "logos/infor-erp.png",
  "Sage": "logos/sage.png",
  "Asana": "logos/asana.png",
  "Google Chat": "logos/google-chat.png",
  "Google Docs": "logos/google-docs.png",
  "Google Forms": "logos/google-forms.png",
  "Google Keep": "logos/google-keep.png",
  "Google Meet": "logos/google-meet.png",
  "Google Sheets": "logos/google-sheets.png",
  "Monday.com": "logos/monday-com.png",
  "Airtable": "logos/airtable.png",
  "Clay": "logos/clay.png",
  "ClickUp": "logos/clickup.png",
  "UPS": "logos/ups.png",
  "FedEx": "logos/fedex.png",
  "Google Slides": "logos/google-slides.png",
  "Google Tasks": "logos/google-tasks.png",
  "Confluence": "logos/confluence.png",
  "DocuSign": "logos/docusign.png",
  "Slack": "logos/slack.png",
  "Azure": "logos/azure.png",
  "Google Cloud": "logos/google-cloud.png",
  "AWS": "logos/aws.png",
  "Pipedrive": "logos/pipedrive.png",
  "Zoho": "logos/zoho.png",
  "HubSpot": "logos/hubspot.png"
};

function getLogoPath(connectorName) {
  return logoMap[connectorName] || 'logos/default.png';
}

// =============== HELPERS ==================
const normalize = s => (s || "").toString().toLowerCase().replace(/\s|[.\-–—]/g, '');
const premiumSet = new Set(premiumConnectors.map(normalize));

function isPremium(name) {
  const n = normalize(name);
  if (premiumSet.has(n)) return true;
  // also allow prefix match to catch things like "Zendesk" vs "Zendesk – Including SCIM"
  for (const p of premiumSet) { if (n.startsWith(p) || p.startsWith(n)) return true; }
  return false;
}

function showView(viewElement) {
  [connectorCatalog, useCasesDisplay].forEach(el => {
    el.classList.remove('view-active');
    el.classList.add('view-inactive');
  });
  viewElement.classList.remove('view-inactive');
  viewElement.classList.add('view-active');
  if (mainInstruction) mainInstruction.classList.remove('hidden');
}

// =============== RENDER ==================
function displayConnectors(filter = '') {
  if (!connectorCatalog) return;
  connectorCatalog.innerHTML = '';

  let filteredConnectors = allConnectors.filter(connector => {
    const nameMatch = connector.name.toLowerCase().includes(filter.toLowerCase());
    const passPremiumGate = premiumOnly ? isPremium(connector.name) : true;
    return nameMatch && passPremiumGate;
  });

  // Sort so premium connectors come first
  filteredConnectors.sort((a, b) => {
    const aPremium = isPremium(a.name);
    const bPremium = isPremium(b.name);
    if (aPremium === bPremium) return 0;
    return aPremium ? -1 : 1;
  });

  if (filteredConnectors.length === 0) {
    connectorCatalog.innerHTML = '<p class="instruction">No connectors found matching your search.</p>';
    return;
  }

  filteredConnectors.forEach(connector => {
    const card = document.createElement('div');
    card.className = 'connector-card';
    if (isPremium(connector.name)) {
      card.classList.add('premium');
      const badge = document.createElement('div');
      badge.className = 'premium-badge';
      badge.title = 'Premium Connector';
      badge.textContent = '★';
      card.appendChild(badge);
    }

    card.setAttribute('data-name', connector.name);
    card.setAttribute('data-category', connector.category);

    const logoImg = document.createElement('img');
    logoImg.src = getLogoPath(connector.name);
    logoImg.alt = `${connector.name} logo`;

    const nameStrong = document.createElement('strong');
    nameStrong.textContent = connector.name;

    card.appendChild(logoImg);
    card.appendChild(nameStrong);

    card.addEventListener('click', () => showIndividualUseCases(connector));
    connectorCatalog.appendChild(card);
  });
}

function showIndividualUseCases(connector) {
  if (!useCasesDisplay || !useCasesTitle || !useCasesList) return;
  showView(useCasesDisplay);
  useCasesTitle.textContent = `${connector.name} Use Cases`;
  useCasesList.innerHTML = '';

  if (connector.useCases && connector.useCases.length > 0) {
    connector.useCases.forEach(useCase => {
      const li = document.createElement('li');
      li.textContent = useCase;
      useCasesList.appendChild(li);
    });
  } else {
    const li = document.createElement('li');
    li.textContent = `No specific use cases listed for ${connector.name} yet.`;
    useCasesList.appendChild(li);
  }

  useCasesDisplay.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// =============== EVENTS ==================
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    currentFilter = e.target.value;
    displayConnectors(currentFilter);
  });
}

if (premiumToggle) {
  premiumToggle.addEventListener('change', (e) => {
    premiumOnly = !!e.target.checked;
    displayConnectors(currentFilter);
  });
}

if (backToConnectorsBtn) {
  backToConnectorsBtn.addEventListener('click', () => {
    showView(connectorCatalog);
    displayConnectors(currentFilter);
  });
}

// =============== INIT ==================
document.addEventListener('DOMContentLoaded', () => {
  displayConnectors();
  // ensure starting view
  if (connectorCatalog) {
    connectorCatalog.classList.add('view-active');
    connectorCatalog.classList.remove('view-inactive');
  }
});
