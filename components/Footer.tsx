export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-4 gap-10">

          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Advocate Depankar Chakraborty
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed">
              Providing trusted legal services across Bangladesh with over
              10 years of professional experience in civil, criminal,
              income tax and company matters.
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-semibold mb-4">Practice Areas</h4>

            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Civil Law</li>
              <li>Criminal Defense</li>
              <li>Income Tax Matters</li>
              <li>Company Law</li>
            </ul>
          </div>

          {/* Chambers */}
          <div>
            <h4 className="font-semibold mb-4">Chambers</h4>

            <p className="text-slate-400 text-sm mb-3">
              <strong>Judge Court Chamber</strong><br/>
              Ajimunnessa Bhavan 5/1<br/>
              Kailash Ghosh Lane<br/>
              Room: 2003 (1st Floor)<br/>
              Kotwali, Dhaka
            </p>

            <p className="text-slate-400 text-sm">
              <strong>High Court Chamber</strong><br/>
              Chamber No: 8045 (7th Floor)<br/>
              Shohrawardi Building<br/>
              Supreme Court Bar Association
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>

            <p className="text-slate-400 text-sm mb-2">
              Mobile: 01581074575
            </p>

            <p className="text-slate-400 text-sm">
              Email: crajib8844@gmail.com
            </p>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Advocate Depankar Chakraborty. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}