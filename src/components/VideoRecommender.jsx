import React, { useState, useEffect, useCallback } from 'react';
import { Play, Clock, Eye, ThumbsUp, BookOpen, Code, Trophy, Calendar, User, Search, Filter, Star, Bookmark, TrendingUp, Zap, Loader, Youtube } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import env from '../env';

const YOUTUBE_API_KEY = env.YOUTUBE_API_KEY;
const YOUTUBE_API_BASE = env.YOUTUBE_API_BASE;

const VideoRecommender = () => {
