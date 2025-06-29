
import { Star } from "lucide-react";

const FavoritesPage = () => {
  return (
    <div className="p-4 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <div className="bg-gray-200 rounded-2xl p-12 mb-6">
          <Star size={48} className="text-gray-400 mx-auto" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-2">No favorite items</h1>
        <p className="text-gray-600 mb-2">It looks like you don't have any favorites yet.</p>
        <p className="text-gray-600">
          Tap the <Star size={16} className="inline mx-1" /> icon in the Menu to add some.
        </p>
      </div>
    </div>
  );
};

export default FavoritesPage;
