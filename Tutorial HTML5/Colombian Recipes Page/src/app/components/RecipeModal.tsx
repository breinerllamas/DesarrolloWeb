import { X, Clock, ChefHat, MessageCircle } from 'lucide-react';
import { Recipe } from '../data/recipes';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';

interface RecipeModalProps {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
}

export function RecipeModal({ recipe, isOpen, onClose }: RecipeModalProps) {
  if (!recipe) return null;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hola! Me interesa saber más sobre la receta de ${recipe.name}`);
    window.open(`https://wa.me/573147484350?text=${message}`, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{recipe.name}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <img 
            src={recipe.image} 
            alt={recipe.name}
            className="w-full h-64 object-cover rounded-lg"
          />
          
          <div className="flex items-center gap-4 text-sm">
            <span className="px-3 py-1 bg-yellow-500 text-white rounded-full font-medium">
              {recipe.region}
            </span>
            <div className="flex items-center gap-1 text-gray-600">
              <Clock className="size-4" />
              <span>{recipe.time}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <ChefHat className="size-4" />
              <span>{recipe.difficulty}</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Descripción</h3>
            <p className="text-gray-700">{recipe.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Historia</h3>
            <p className="text-gray-700 leading-relaxed">{recipe.history}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Ingredientes</h3>
            <ul className="grid grid-cols-2 gap-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-700">
                  <span className="text-yellow-500">•</span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t">
            <Button 
              onClick={handleWhatsAppClick}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              <MessageCircle className="size-5 mr-2" />
              Contactar por WhatsApp para más detalles
            </Button>
            <p className="text-center text-sm text-gray-500 mt-2">
              ¿Quieres una explicación más detallada? ¡Escríbenos!
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
