/**
 * Robust Client-Side Storage and Dispatch for Buyer & Seller Real Estate Inquiries
 */

const STORAGE_KEY = 'ambition_real_estate_inquiries_v1';

export const generateInquiryId = (type = 'buyer') => {
  const prefix = type.toLowerCase() === 'seller' ? 'AMB-SELL' : 'AMB-BUY';
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${randomNum}`;
};

export const saveInquiry = (data) => {
  try {
    const existing = getInquiries();
    const inquiryId = generateInquiryId(data.type);
    const newEntry = {
      id: inquiryId,
      timestamp: new Date().toISOString(),
      status: 'New',
      ...data
    };
    const updated = [newEntry, ...existing];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return { success: true, inquiryId, entry: newEntry };
  } catch (err) {
    console.error('Failed to store inquiry locally:', err);
    return { success: false, inquiryId: generateInquiryId(data?.type) };
  }
};

export const getInquiries = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Failed to read inquiries:', err);
    return [];
  }
};

export const formatWhatsAppMessage = (data, inquiryId) => {
  if (data.type === 'seller') {
    return `*🏡 NEW PROPERTY LISTING / SELLER SUBMISSION*
*Reference ID:* ${inquiryId}
--------------------------------
• *Owner Name:* ${data.name}
• *Phone:* ${data.phone}
• *Email:* ${data.email || 'Not provided'}
• *Property Type:* ${data.propertyType || 'Plot / Land'}
• *Location / Colony:* ${data.location || 'Ujjain / Indore Road'}
• *Plot / Built Area:* ${data.area || 'Not specified'}
• *Expected Asking Price:* ${data.expectedPrice || 'Open to valuation'}
• *Legal Title Status:* ${data.legalStatus || 'Clear Title'}
• *Timeline to Sell:* ${data.timeline || 'Flexible'}
• *Additional Details:* ${data.notes || 'Looking for qualified buyers.'}
--------------------------------
_Submitted via Ambition Real Estate Official Portal_`;
  }

  // Buyer Message
  return `*🏷️ NEW BUYER INQUIRY / SITE VISIT REQUEST*
*Reference ID:* ${inquiryId}
--------------------------------
• *Buyer Name:* ${data.name}
• *Phone:* ${data.phone}
• *Email:* ${data.email || 'Not provided'}
• *Interested In:* ${data.interest || 'Property Inquiry'}
• *Budget Bracket:* ${data.budget || 'Flexible'}
• *Preferred Location:* ${data.location || 'Indore-Ujjain Corridor'}
• *Preferred Visit Date:* ${data.visitDate || 'Prompt scheduling'}
• *Requirements / Notes:* ${data.notes || 'Please share available options.'}
--------------------------------
_Submitted via Ambition Real Estate Official Portal_`;
};
