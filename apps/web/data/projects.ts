import type { Project } from '@malachimuhic/shared';

export const projects: Project[] = [
  {
    id: '1',
    title: 'LLM: LoRA Training & Runtime Pipeline',
    description:
      'Made changes to an end-to-end PyTorch training system to fix inference and allow flexible extension and fine-tuning of transformer models through LoRA, a lightweight and parameter-efficient method for training.',
    tags: ['Python', 'LoRA', 'ONNX Runtime', 'FastAPI'],
    link: 'https://github.com/malachimuhic/Torch2Jax-DeepSeek-R1-Distill-Qwen-1.5B',
  },
  {
    id: '2',
    title: 'HoopAI – NBA Game Outcome Prediction',
    description:
      'HoopAI is a machine learning project designed to predict NBA game outcomes based on historical team performance data. Using rolling statistics and feature engineering, HoopAI builds models to forecast both point differentials and win/loss results for NBA matchups.',
    tags: ['Python', 'Scikit-learn', 'XGBoost'],
    link: 'https://github.com/malachimuhic/HoopAI',
  },
];
