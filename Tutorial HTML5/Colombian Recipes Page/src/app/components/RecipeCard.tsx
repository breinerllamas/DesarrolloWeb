import { Heart, Clock, ChefHat } from 'lucide-react';
import { Recipe } from '../data/recipes';
import { Card } from './ui/card';

interface RecipeCardProps {
  recipe: Recipe;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
  onClick: () => void;
}

export function RecipeCard({ recipe, isFavorite, onToggleFavorite, onClick }: RecipeCardProps) {
  return (
    <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative">
        <img 
          src={recipe.image} 
          alt={recipe.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          onClick={onClick}
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(recipe.id);
          }}
          className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
        >
          <Heart 
            className={`size-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
          />
        </button>
        <div className="absolute top-3 left-3 px-3 py-1 bg-yellow-500 text-white text-sm rounded-full font-medium">
          {recipe.region}
        </div>
      </div>
      
      <div className="p-4" onClick={onClick}>
        <h3 className="text-xl mb-2">{recipe.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{recipe.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="size-4" />
            <span>{recipe.time}</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat className="size-4" />
            <span>{recipe.difficulty}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
