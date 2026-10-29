import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, MapPin, Compass, Navigation, Mountain, School, Waves } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface Landmark {
  name: string;
  nameNe: string;
  lat: number;
  lng: number;
  elevation: string;
  description: string;
  descriptionNe: string;
  icon: 'school' | 'mountain' | 'river' | 'border';
}

const LANDMARKS: Landmark[] = [
  {
    name: "Mahendra Model Secondary School",
    nameNe: "महेन्द्र नमुना माध्यमिक विद्यालय, दार्चुला खलङ्गा",
    lat: 29.8408,
    lng: 80.5348,
    elevation: "920 m (3,018 ft)",
    description: "Bhupendra's school in Khalanga, Grade 9 Section E. The leading educational and model secondary institution of Darchula district.",
    descriptionNe: "भुपेन्द्र अध्ययनरत विद्यालय, कक्षा ९ सेक्सन 'ई'। दार्चुला जिल्लाको ऐतिहासिक र अग्रणी नमुना माध्यमिक शैक्षिक केन्द्र।",
    icon: "school"
  },
  {
    name: "Api Himal (Mount Api)",
    nameNe: "अपी हिमाल (७,१३२ मिटर)",
    lat: 29.9867,
    lng: 80.9333,
    elevation: "7,132 m (23,399 ft)",
    description: "The highest mountain peak in the Yoka Pahar range of western Himalayas, situated within Api Nampa Conservation Area of Darchula.",
    descriptionNe: "सुदूरपश्चिम नेपालको सबैभन्दा अग्लो हिमाल, दार्चुलाको अपी नम्पा संरक्षण क्षेत्रभित्र अवस्थित गौरवशाली हिमाल।",
    icon: "mountain"
  },
  {
    name: "Mahakali River & Suspension Bridge",
    nameNe: "महाकाली नदी तथा झोलुङ्गे पुल",
    lat: 29.8420,
    lng: 80.5310,
    elevation: "890 m (2,920 ft)",
    description: "The majestic border river flowing beside Khalanga bazaar, connecting Nepal with Dharchula, Uttarakhand (India).",
    descriptionNe: "दार्चुला खलङ्गा भएर बग्ने ऐतिहासिक सीमा नदी, जसले नेपाल र भारतलाई झोलुङ्गे पुलमार्फत जोड्दछ।",
    icon: "river"
  },
  {
    name: "Byas & Tinkar Valley",
    nameNe: "व्यास तथा टिंकर उपत्यका",
    lat: 30.1250,
    lng: 81.0180,
    elevation: "3,650 m (11,975 ft)",
    description: "Northernmost tri-junction region of Darchula with rich indigenous Byasi Sauka culture, alpine flora, and ancient trans-Himalayan trade routes.",
    descriptionNe: "दार्चुलाको उत्तरी हिमाली भूभाग, जहाँ ब्याँसी समुदायको मौलिक संस्कृति, दुर्लभ जडीबुटी र प्राचीन व्यापारिक मार्ग छन्।",
    icon: "border"
  }
];

export const DarchulaCoordinatesModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [activeLandmark, setActiveLandmark] = useState<Landmark>(LANDMARKS[0]);

  if (!isOpen) return null;

  // Haversine formula calculation from school
  const calculateDistance = (lat: number, lng: number) => {
    const R = 6371; // Earth radius in km
    const dLat = ((lat - 29.8408) * Math.PI) / 180;
    const dLng = ((lng - 80.5348) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((29.8408 * Math.PI) / 180) *
        Math.cos((lat * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (R * c).toFixed(1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl p-6 text-slate-100">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">
                {language === 'ne' ? 'दार्चुला भूगोल तथा विद्यालय कोअर्डिनेट अन्वेषक' : 'Darchula District & School Coordinates Explorer'}
              </h2>
              <p className="text-xs text-cyan-400 font-mono">
                Mahendra Model Sec. School (29.8408° N, 80.5348° E) • Sudurpashchim Nepal
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selected Landmark Highlight Box */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-950 to-cyan-950/40 border border-cyan-500/30 mb-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold mb-2">
                <MapPin className="w-3.5 h-3.5" />
                {activeLandmark.elevation}
              </div>
              <h3 className="text-xl font-bold text-white">
                {language === 'ne' ? activeLandmark.nameNe : activeLandmark.name}
              </h3>
              <p className="text-sm text-slate-300 mt-2 max-w-xl">
                {language === 'ne' ? activeLandmark.descriptionNe : activeLandmark.description}
              </p>
            </div>

            {/* Coordinates Badge */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-700/80 font-mono text-xs space-y-1">
              <div className="text-slate-400">{language === 'ne' ? 'अक्षांश (Latitude):' : 'Latitude:'}</div>
              <div className="text-cyan-300 font-bold text-sm">{activeLandmark.lat}° N</div>
              <div className="text-slate-400 mt-2">{language === 'ne' ? 'देशान्तर (Longitude):' : 'Longitude:'}</div>
              <div className="text-emerald-300 font-bold text-sm">{activeLandmark.lng}° E</div>
              <div className="pt-2 text-slate-400 border-t border-slate-800">
                {language === 'ne' ? 'विद्यालयबाट दूरी:' : 'Distance from School:'}{' '}
                <span className="text-white font-bold">{calculateDistance(activeLandmark.lat, activeLandmark.lng)} km</span>
              </div>
            </div>
          </div>
        </div>

        {/* Landmark Selection Grid */}
        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
            {language === 'ne' ? 'दार्चुलाका मुख्य भौगोलिक केन्द्रहरू (Select Landmark):' : 'Key Geographic Coordinates (Select Landmark):'}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {LANDMARKS.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveLandmark(item)}
                className={`p-3.5 rounded-xl text-left border transition flex items-start gap-3 ${
                  activeLandmark.name === item.name
                    ? 'bg-cyan-950/60 border-cyan-400 text-white shadow-lg shadow-cyan-950/50'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white'
                }`}
              >
                <div className="p-2 rounded-lg bg-slate-900 text-cyan-400 shrink-0 mt-0.5">
                  {item.icon === 'school' && <School className="w-4 h-4" />}
                  {item.icon === 'mountain' && <Mountain className="w-4 h-4" />}
                  {item.icon === 'river' && <Waves className="w-4 h-4" />}
                  {item.icon === 'border' && <Navigation className="w-4 h-4" />}
                </div>
                <div>
                  <div className="font-semibold text-sm">
                    {language === 'ne' ? item.nameNe : item.name}
                  </div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">
                    {item.lat}° N, {item.lng}° E • {item.elevation}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Geography Educational Tip */}
        <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-1">
          <div className="font-semibold text-cyan-300">
            {language === 'ne' ? 'कक्षा ९ सामाजिक अध्ययन नक्सा कार्य टिप:' : 'CDC Grade 9 Social Studies Map Tip:'}
          </div>
          <div>
            {language === 'ne'
              ? 'नेपालको नक्सा कोर्दा सुदूरपश्चिम प्रदेशको उत्तर-पश्चिम सिमानामा दार्चुला जिल्ला र महाकाली नदी पहिचान गरिन्छ। दार्चुलाको उत्तरी सिमाना चीन (तिब्बत) र पश्चिमी सिमाना भारतसँग जोडिएको छ।'
              : 'When drawing a map of Nepal in Grade 9 Social Studies, Darchula is placed at the far north-western corner bounded by the Mahakali river, bordering India to the west and China (Tibet) to the north.'}
          </div>
        </div>

      </div>
    </div>
  );
};
