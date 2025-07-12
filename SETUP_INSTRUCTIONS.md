# 🚀 Database Setup Instructions

## ⚠️ IMPORTANT: You need to run the SQL migration to create the database tables!

### Step 1: Create Database Tables

1. **Open your Supabase Dashboard**
   - Go to: https://supabase.com/dashboard/project/ujefevsypbfdqcihkxgn
   - Login to your account

2. **Navigate to SQL Editor**
   - Click on "SQL Editor" in the left sidebar
   - Click "New Query"

3. **Run the Migration**
   - Copy the entire contents of `supabase/migrations/create_contacts_tables.sql`
   - Paste it into the SQL Editor
   - Click "Run" to execute the SQL

### Step 2: Verify Tables Created

After running the SQL, you should see two new tables in your database:

1. **contacts** - For contact form submissions
2. **whatsapp_contacts** - For WhatsApp interactions

### Step 3: Test the Contact Form

1. Fill out the contact form on your website
2. Check the Supabase dashboard under "Table Editor" → "contacts"
3. You should see your test submission

## 🔧 What the Migration Creates:

### Tables:
- ✅ `contacts` table with proper columns
- ✅ `whatsapp_contacts` table with proper columns
- ✅ Indexes for better performance
- ✅ Row Level Security (RLS) enabled

### Security Policies:
- ✅ Anonymous users can INSERT (submit forms)
- ✅ Authenticated users can SELECT (view data)
- ✅ Service role has full access (admin operations)

## 🐛 Troubleshooting:

### "relation does not exist" error:
- This means the tables haven't been created yet
- Run the SQL migration as described above

### "permission denied" error:
- This means RLS policies aren't set up correctly
- Re-run the migration to fix policies

### Form submits but no data appears:
- Check browser console for errors
- Verify your Supabase URL and API key are correct
- Make sure you're looking at the right project

## 📧 Email Integration (Optional):

The contact form saves to the database automatically. For email notifications:

1. **EmailJS** (Recommended):
   - Sign up at https://www.emailjs.com/
   - Follow setup instructions in `src/lib/email.ts`

2. **Formspree** (Alternative):
   - Sign up at https://formspree.io/
   - Update email configuration

## ✅ Success Indicators:

- Contact form submits without errors
- Data appears in Supabase dashboard
- WhatsApp button works and saves interactions
- Toast notifications show success messages

---

**Need Help?** Check the browser console for detailed error messages.