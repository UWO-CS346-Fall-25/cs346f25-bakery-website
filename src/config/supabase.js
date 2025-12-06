// config/supabase.js
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

console.log("Supabase URL:", process.env.SUPABASE_URL);
console.log("Service key loaded:", !!process.env.SUPABASE_SERVICE_ROLE_KEY);
console.log("Service key length:", process.env.SUPABASE_SERVICE_ROLE_KEY?.length);

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

module.exports = supabase;
