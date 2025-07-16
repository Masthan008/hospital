import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageCircle, Users, Calendar, Heart, Share2, MessageSquare, MoreHorizontal, Search, Plus } from 'lucide-react';
import { GlassCard, GlassPanel } from '@/components/ui/glass-card';

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('forums');

  // Sample data
  const forums = [
    {
      id: 1,
      title: 'Living with Diabetes',
      description: 'Share experiences and tips for managing diabetes',
      members: 1245,
      posts: 543,
      latestPost: '2 hours ago',
      icon: '💉'
    },
    // Add more forum data...
  ];

  const supportGroups = [
    {
      id: 1,
      name: 'Cancer Survivors Network',
      description: 'A supportive community for cancer survivors and their families',
      members: 856,
      nextMeeting: 'Tomorrow, 6:00 PM',
      isOnline: true
    },
    // Add more support group data...
  ];

  const successStories = [
    {
      id: 1,
      title: 'My Journey to Recovery',
      author: 'Sarah K.',
      date: '2 weeks ago',
      excerpt: 'After my diagnosis, I never thought I could live a normal life again...',
      likes: 124,
      comments: 32
    },
    // Add more success stories...
  ];

  const events = [
    {
      id: 1,
      title: 'Nutrition & Wellness Webinar',
      date: 'July 25, 2023',
      time: '7:00 PM - 8:30 PM',
      type: 'webinar',
      speaker: 'Dr. Emily Chen, RD',
      attendees: 156
    },
    // Add more events...
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <GlassPanel className="p-8 mb-12 text-center" data-aos="fade-up">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-hospital-blue to-hospital-green bg-clip-text text-transparent mb-4">
            Community Hub
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Connect, share, and support each other in our caring community
          </p>
          <div className="mt-6 max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search discussions, groups, and events..."
              className="pl-10 w-full bg-white/50 backdrop-blur-sm border-0 focus-visible:ring-2 focus-visible:ring-hospital-blue/50"
            />
          </div>
        </GlassPanel>

      <Tabs defaultValue="forums" className="w-full" onValueChange={setActiveTab}>
        <GlassPanel className="p-1.5 mb-8 w-fit mx-auto" data-aos="fade-up" data-aos-delay="100">
          <TabsList className="grid w-full grid-cols-4 bg-transparent gap-1">
            <TabsTrigger 
              value="forums" 
              className="flex items-center gap-2 data-[state=active]:bg-white/20 data-[state=active]:text-hospital-blue data-[state=active]:shadow-sm rounded-lg transition-all"
            >
              <MessageCircle className="h-4 w-4" /> 
              <span className="hidden sm:inline">Forums</span>
            </TabsTrigger>
            <TabsTrigger 
              value="support" 
              className="flex items-center gap-2 data-[state=active]:bg-white/20 data-[state=active]:text-hospital-blue data-[state=active]:shadow-sm rounded-lg transition-all"
            >
              <Users className="h-4 w-4" /> 
              <span className="hidden sm:inline">Support</span>
            </TabsTrigger>
            <TabsTrigger 
              value="stories" 
              className="flex items-center gap-2 data-[state=active]:bg-white/20 data-[state=active]:text-hospital-blue data-[state=active]:shadow-sm rounded-lg transition-all"
            >
              <Heart className="h-4 w-4" /> 
              <span className="hidden sm:inline">Stories</span>
            </TabsTrigger>
            <TabsTrigger 
              value="events" 
              className="flex items-center gap-2 data-[state=active]:bg-white/20 data-[state=active]:text-hospital-blue data-[state=active]:shadow-sm rounded-lg transition-all"
            >
              <Calendar className="h-4 w-4" /> 
              <span className="hidden sm:inline">Events</span>
            </TabsTrigger>
          </TabsList>
        </GlassPanel>

        <TabsContent value="forums" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forums.map((forum, index) => (
              <GlassCard 
                key={forum.id} 
                className="hover:scale-[1.02] transition-transform duration-300 flex flex-col h-full"
                data-aos="fade-up" 
                data-aos-delay={100 * (index % 3)}
              >
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-white/20 text-hospital-blue text-2xl">
                      {forum.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{forum.title}</h3>
                      <p className="text-sm text-gray-600">{forum.members} members • {forum.posts} posts</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{forum.description}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <span className="text-sm text-gray-500">Latest: {forum.latestPost}</span>
                  <Button 
                    variant="outline" 
                    className="bg-white/30 hover:bg-white/50 border-white/30 text-hospital-blue hover:text-hospital-blue/90"
                  >
                    Join Discussion
                  </Button>
                </div>
              </GlassCard>
            ))}
            
            {/* Add New Forum Card */}
            <GlassCard 
              className="border-2 border-dashed border-white/30 hover:border-hospital-blue/50 transition-colors flex flex-col items-center justify-center p-8 text-center cursor-pointer hover:bg-white/5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-hospital-blue mb-3">
                <Plus className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-700 mb-1">Start a New Discussion</h3>
              <p className="text-sm text-gray-500">Create your own forum topic</p>
            </GlassCard>
          </div>
        </TabsContent>

        {/* Other tab contents will be added similarly */}
        
      </Tabs>
      
      {/* Floating Action Button */}
      <button 
        className="fixed bottom-8 right-8 bg-hospital-blue hover:bg-hospital-blue/90 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center z-50"
        onClick={() => console.log('Create new post')}
      >
        <Plus className="h-6 w-6" />
        <span className="ml-2 hidden sm:inline">New Post</span>
      </button>
    </div>
  </div>
  );
}
