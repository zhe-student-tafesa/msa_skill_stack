export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  ageRange: AgeRange;
  savedModules: string[];
  inProgressModules: string[];
  createDate: string;
  // ✅  use webhook to update the subscriptionStatus
  subscriptionStatus: SubscriptionTier;
  hasActiveSubscription: boolean; //
  purchasedModuleIds: string[];
  subscriptionPackage?: string; // e.g. 'monthly', 'annual_team', 'payg'
  // ✅ New field: Record detailed subscription records (multiple options available)
  subscriptionHistory?: SubscriptionRecord[]; // optional
  userInterests?: UserInterests;
  enterpriseId?: string; // If you are an enterprise user, point to EnterpriseAccount.id
  isEnterpriseAdmin?: boolean; //
}

export interface Module {
  id: string;
  title: string;
  description: string;
  type: "video" | "pdf" | "quiz" | "other"; // V1 only video
  industries: string[]; // ✅   "Construction", "Mining"
  tags?: string[]; // Used for filtering like "New", "Recommended", "Popular", etc.
  duration: string; // e.g. '12m 45s'
  uploadDate: string; // ISO format
  accessType: ModuleAccessType;
  price?: number; // only present if accessType is 'paid'
  videoUrl?: string;
  previewImageUrl?: string;
}

export interface SubscriptionRecord {
  tier: SubscriptionTier; // e.g., "Individual"
  package: string; // e.g., "monthly", "annual_team"
  source: "apple" | "google" | "stripe"; // source channel
  startDate: string; // ISO format
  endDate: string; // ISO format
  isActive: boolean; // currently valid
  renewalType: "monthly" | "annual"; // renewal period
  transactionId?: string; // optional field: for easy checking or connection with RevenueCat
}

export type SubscriptionTier = "Free" | "PayPerModule" | "Individual" | "Team";

export interface SubscriptionPlan {
  tier: SubscriptionTier;
  title: string;
  bestFor: string;
  benefit: string;
  price?: number; // Optional: Free No price
}

export type AgeRange =
  | "Under 18"
  | "18-24"
  | "25-34"
  | "35-44"
  | "45-54"
  | "55-64"
  | "65+";

export type ModuleAccessType = "free" | "paid";

export interface ModuleProgress {
  moduleId: string;
  progress: number; // e.g. 0.5 for 50%
  status: "not-started" | "in-progress" | "completed" | "paused";
  lastAccessed: string; // ISO datetime
}

export interface HomePageModules {
  inProgress: ModuleProgress[];
  recommended: Module[];
  popular: Module[];
  newlyAdded: Module[];
}

/// For Redux management
export interface AppState {
  currentUser: UserProfile | null;
  modules: Module[];
  homeModules: HomePageModules;
  savedModules: Module[];
}

export interface UserInterests {
  goals: string[]; // e.g. ["Personal development", "Upskill for my current job"]
  industries: string[]; // e.g. ["Mining", "Energy"]
  learningStyles: string[]; // e.g. ["Watching short videos", "Listening to audio"]
}

export interface EnterpriseAccount {
  id: string; //  ID
  name: string; //
  contactEmail: string; // admin email
  country: string;
  city?: string;

  branding?: {
    logoUrl?: string;
    primaryColor?: string;
    tagline?: string;
  };

  // Which users belong to this enterprise?
  memberUserIds: string[];

  // Enterprise subscription information (corresponding to RevenueCat)
  subscription: {
    status: "active" | "inactive" | "expired";
    tier: SubscriptionTier; // e.g. 'Team'
    renewalType: "monthly" | "annual";
    startDate: string;
    endDate: string;
    transactionId?: string;
  };

  createdAt: string;
}
